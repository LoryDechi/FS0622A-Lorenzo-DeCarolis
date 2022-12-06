import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-td-form',
    templateUrl: './td-form.component.html',
    styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

    @ViewChild('form', { static: true }) form!: NgForm;

    heroForm = {
        name: '',
        alterego: '',
        power: '',
        nemico: '',
        planet: '',
        debolezza: ''
    }

    hero: any = {
        name: '',
        alterego: '',
        power: '',
        nemico: '',
        planet: '',
        debolezza: ''
    }

    ngOnInit(): void {
        this.form.statusChanges?.subscribe(status => {
            console.log('Stato del form: ', status);
        });
    }

    submit() {
        console.log('Form inviato correttamente: ', this.form);
        this.hero.name = this.form.value.heroInfo.name;
        this.hero.alterego = this.form.value.heroInfo.alterego;
        this.hero.power = this.form.value.heroInfo.power;
        this.hero.nemico = this.form.value.heroInfo.nemico;
        this.hero.planet = this.form.value.heroInfo.planet;
        this.hero.debolezza = this.form.value.heroInfo.debolezza;

        console.log(this.hero);

        this.form.reset();

    }

}
