import { Component, ViewChild } from '@angular/core';
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

  formGroup : FormGroup;
  @ViewChild('cep') cep;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public enderecoServ : EnderecoService,
    public formBuilder : FormBuilder) { // <---
      this.formGroup = this.formBuilder.group({
        logradouro: [''],
        bairro: [''],
        localidade: [''],
        uf: ['']
       
      })
  }


  buscar(){
    this.enderecoServ.buscaCep(this.cep.value).subscribe(response =>{
      this.formGroup = this.formBuilder.group({
        logradouro: [response['logradouro']],
        bairro: [response['bairro']],
        localidade: [response['loc']],
        uf: [response['uf']]
      })  
    }, error =>{
      console.log('Servido não disponível')
    })
  }

}
