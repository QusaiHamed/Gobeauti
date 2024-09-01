import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-invoice-with-details',

  templateUrl: './invoice-with-details.component.html',
  styleUrl: './invoice-with-details.component.css'
})
export class InvoiceWithDetailsComponent implements OnInit {
 todayDate = new Date();
 today = this.todayDate.toISOString().split('T')[0]; // YYYY-MM-DD
displayDate = this.formatDate(this.todayDate); // d-m-y
 
 customer='Orange';
 options = ['Orange', 'White', 'Purple'];
 input6 = [];
tab2=''
 reservationform!:any;
  store: any;
  loading= false;
  
  cols = [
     
    { field: 'previousservices', title: 'Previous Services', isUnique: false },
    { field: 'Expert', title: 'Expert', sort: true },
    { field: 'Price', title: 'Price', sort: true },
    { field: 'Date', title: 'Date' , sort: true},
  ];
  rows = []
 constructor(public storeData: Store<any>, public fb:FormBuilder,  public translate: TranslateService)  {
  this.reservationform = this.fb.group({
      reservationdate: [this.today],
  });

  this.initStore();
  if(translate.currentLang=="ae"){
this.cols= [
{ field: 'previousservices', title: 'الخدمات السابقة', isUnique: false },
{ field: 'Expert', title: 'الخبير', sort: true },
{ field: 'Price', title: 'السعر ', sort: true },
{ field: 'Date', title: 'التاريخ' , sort: true},
]
  }
 }
  ngOnInit(): void {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0]; // YYYY-MM-DD
    this.displayDate = this.formatDate(todayDate); // d-m-y
  }
  async initStore() {
    this.storeData
        .select((d) => d.index)
        .subscribe((d) => {
            this.store = d;
        });
}

 
 formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
updateDate(event: any) {
  this.today = event.target.value; // Update internal date in YYYY-MM-DD format
  this.displayDate = this.formatDate(new Date(this.today));
}
DeleteRow(event:any){
event.target.parentElement.parentElement.remove()
}
AddRow(event:Event){

       // Create a new row
       var tableBody = document.querySelector('#services tbody');
                
                // Define the HTML for the new row
                var newRowHTML = `
                   <tr>\
                <td>\
                <ng-select _ngcontent-ng-c881540417=\"\" placeholder=\"Select an option\" class=\"custom-multiselect ng-select-multiple ng-select-searchable ng-select ng-untouched ng-pristine ng-valid\" style=\"width: 200px;\" ng-reflect-placeholder=\"Select an option\" ng-reflect-items=\"Orange,White,Purple\" ng-reflect-model=\"\" ng-reflect-multiple=\"true\" ng-reflect-clearable=\"false\"><div class=\"ng-select-container\"><div class=\"ng-value-container\"><!--container--><div class=\"ng-placeholder ng-star-inserted\">Select an option</div><!--bindings={\
                  \"ng-reflect-ng-template-outlet\": \"[object Object]\"\
                }--><!--container--><!--container--><!--container--><div aria-haspopup=\"listbox\" role=\"combobox\" class=\"ng-input\" aria-expanded=\"false\"><input aria-autocomplete=\"list\" type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"a3dd5b15bb10\"></div></div><!--container--><!--container--><span class=\"ng-arrow-wrapper\"><span class=\"ng-arrow\"></span></span></div><!--container--></ng-select>
            </td>\
            <td><input type=\"number\" name=\"\" id=\"\" class=\"form-input\"></td>\
            <td><input type=\"number\" name=\"\" id=\"\" class=\"form-input\" disabled></td>\
            <td>\
            <ng-select _ngcontent-ng-c881540417=\"\" placeholder=\"Select an option\" class=\"custom-multiselect ng-select-multiple ng-select-searchable ng-select ng-untouched ng-pristine ng-valid\" style=\"width: 200px;\" ng-reflect-placeholder=\"Select an option\" ng-reflect-items=\"Orange,White,Purple\" ng-reflect-model=\"\" ng-reflect-multiple=\"true\" ng-reflect-clearable=\"false\"><div class=\"ng-select-container\"><div class=\"ng-value-container\"><!--container--><div class=\"ng-placeholder ng-star-inserted\">Select an option</div><!--bindings={\
              \"ng-reflect-ng-template-outlet\": \"[object Object]\"\
            }--><!--container--><!--container--><!--container--><div aria-haspopup=\"listbox\" role=\"combobox\" class=\"ng-input\" aria-expanded=\"false\"><input aria-autocomplete=\"list\" type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"a3dd5b15bb10\"></div></div><!--container--><!--container--><span class=\"ng-arrow-wrapper\"><span class=\"ng-arrow\"></span></span></div><!--container--></ng-select>
            </td>\
            <td>\
              <input type=\"time\" name=\"\" id=\"\" class=\"form-input\">\
            </td>\
            <td >             <ng-select _ngcontent-ng-c881540417=\"\" placeholder=\"Select an option\" class=\"custom-multiselect ng-select-multiple ng-select-searchable ng-select ng-untouched ng-pristine ng-valid\" style=\"width: 200px;\" ng-reflect-placeholder=\"Select an option\" ng-reflect-items=\"Orange,White,Purple\" ng-reflect-model=\"\" ng-reflect-multiple=\"true\" ng-reflect-clearable=\"false\"><div class=\"ng-select-container\"><div class=\"ng-value-container\"><!--container--><div class=\"ng-placeholder ng-star-inserted\">Select an option</div><!--bindings={\
              \"ng-reflect-ng-template-outlet\": \"[object Object]\"\
            }--><!--container--><!--container--><!--container--><div aria-haspopup=\"listbox\" role=\"combobox\" class=\"ng-input\" aria-expanded=\"false\"><input aria-autocomplete=\"list\" type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"a3dd5b15bb10\"></div></div><!--container--><!--container--><span class=\"ng-arrow-wrapper\"><span class=\"ng-arrow\"></span></span></div><!--container--></ng-select>
        </td>\
        <td class=\"flex items-center justify-center \" style=\"color: red;font-size: 15px;margin-top: 50%;\
        transform: translateY(-50%);\">\
            <svg  (click)=\"DeleteRow($event)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 256 256\"><path fill=\"currentColor\" d=\"M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24M100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0\"/></svg>\
        </td>\
            </tr>
                `;
                
                // Append the new row to the table body
                tableBody?.insertAdjacentHTML('beforeend', newRowHTML);
            }
   

   // Event listener for the Add Row button
 



}
