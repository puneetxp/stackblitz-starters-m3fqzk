import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-redlight',
    standalone: true,
    imports: [NgClass],
    templateUrl: './redlight.component.html',
    styleUrl: './redlight.component.css'
})
export class RedlightComponent {
    constructor() {
        this.loop();
    }
    active = 0;
    loop() {
        setInterval(() => {
            console.log(this.active);
            if (this.active == 10) {
                this.active = 0;
            } else {
                this.active++;
            }
        }, 1000)
    }


}
