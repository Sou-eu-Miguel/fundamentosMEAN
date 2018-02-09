import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
	selector: 'app-tentativas',
	templateUrl: './tentativas.component.html',
	styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
	
	public coracoes: Array<Coracao> = [	new Coracao(true),
										new Coracao(true),
										new Coracao(true)]

	@Input() private tentativas: number

	constructor(){}

	ngOnChanges() {
		if(this.tentativas != this.coracoes.length){
			let posicaoCoracao:number = this.coracoes.length - this.tentativas
			this.coracoes[posicaoCoracao -1].cheio = false			
		}

	}

	ngOnInit() {		

	}
}
