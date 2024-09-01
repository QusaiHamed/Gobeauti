import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'icon-play-circle',
    template: `
        <ng-template #template>
            <svg *ngIf="fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.0261 9.27496C12.7888 9.10835 12.5201 8.93601 12.2419 8.76684C11.1695 8.1147 10.6333 7.78863 10.1524 8.14964C9.6715 8.51065 9.62779 9.2664 9.54038 10.7779C9.51566 11.2053 9.5 11.6244 9.5 12C9.5 12.3757 9.51566 12.7947 9.54038 13.2222C9.62779 14.7337 9.6715 15.4894 10.1524 15.8504C10.6333 16.2115 11.1695 15.8854 12.2419 15.2333C12.5201 15.0641 12.7888 14.8917 13.0261 14.7251C13.2966 14.5352 13.5909 14.3073 13.8876 14.0652C14.9625 13.1884 15.5 12.7499 15.5 12C15.5 11.2502 14.9625 10.8117 13.8876 9.93485C13.5909 9.69278 13.2966 9.46488 13.0261 9.27496Z"
                    fill="currentColor"
                />
            </svg>

            <svg *ngIf="!fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                <path
                    d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
            </svg>
        </ng-template>
    `,
})
export class IconPlayCircleComponent {
    @Input() fill: boolean = false;
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
