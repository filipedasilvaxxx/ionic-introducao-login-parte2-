import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the BuscaEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-endereco',
  templateUrl: 'busca-endereco.html',
})
export class BuscaEnderecoPage {

  endereco : Endereco = new Endereco();
  formGroup : FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public enderecoServ : EnderecoService,
    public formBuilder : FormBuilder) { // <---
      this.formGroup = this.formBuilder.group({
        cep: [''],
        logradouro: [''],
        complemento: [''],
        bairro: [''],
        localidade: [''],
        uf: [''],
        unidade: [''],
        ibge: [''],
        gia: ['']
      })
  }


  buscar(){
    let cep = this.formGroup.controls['cep'].value
    this.enderecoServ.buscaCep(cep).subscribe(response =>{
      console.log(response);
    })
  }

}
