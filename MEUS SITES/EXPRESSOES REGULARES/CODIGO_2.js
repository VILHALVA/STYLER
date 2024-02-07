function inserirMascara(idCampo, mascara) {
	var tamanhoMascara = mascara.length;

	// Limita a quantidade de caracteres a ser digitada pelo usuario dentro do campo em relacao a 
	// quantidade de caracteres contidos na mascara
	if (document.getElementById(idCampo).value.length > tamanhoMascara-1)
		document.getElementById(idCampo).value = (document.getElementById(idCampo).value).substr(0,tamanhoMascara-1);
	else {

		var i;
		var vetorPosicoes = new Array(); // Vetor contendo as posicos de cada símbolo da mascara
		var vetorSimbolos = new Array(); // Vetor contendo todos os símbolos da mascara
		var padrao = /[a-zA-Z0-9]/;     // Na mascara e permitido ao usuario digitar qualquer caracater alfanumerico
	
		// Criacao de dois vetores: um contendo os simbolos da mascara e outro as posicoes de cada simbolo
		// dentro da mascara
		for (i=0; i<tamanhoMascara; i++) {
			if (mascara.charAt(i).match(padrao)==null) {
				vetorSimbolos.push(mascara.charAt(i));
				vetorPosicoes.push(i+1);
			}
		}
	
		var qtidadeSimbolos = vetorPosicoes.length;
		var qtidadePosicoes = vetorSimbolos.length;
		var tamanhoCampo = document.getElementById(idCampo).value.length;
		// Insere os simbolos na informacao digitada pelo usuário. Criação da mascara dinamicamente
		for (i=0; i<vetorPosicoes.length; i++) {
			// Caracteres insuficientes para aplicar um simbolo especifico da mascara
			if (tamanhoCampo < vetorPosicoes[i]) break; 
			else {
				var texto = document.getElementById(idCampo).value;
				if (texto[vetorPosicoes[i]-1] != vetorSimbolos[i])
					document.getElementById(idCampo).value = texto.slice(0,vetorPosicoes[i]-1) + vetorSimbolos[i] + texto.slice(vetorPosicoes[i] - 1);
			}
		}
	}
}

/****************************************************************************************
  Funcao: validarInformacao
  Objetivo: Mudar a formatação do campo de entrada de dados do formulario, alterando a cor 
            de fundo e da borda e o espaçamento interno, conforme o resultado da 
			validação, ou seja, se a informacao digitada pelo usuário for compativel/imcompativel 
			com o padrao esperado, aquelas propriedades do campo serao alteradas (cor de fundo, etc)
			conforme os valores do terceiro e quarto parametros.
  Parametros:
  		- idCampo: id do campo onde sera aplicada a mascara
		- expReg: expressao regular contendo o padrao esperado a ser digitado pelo usuario
		          dentro do campo
		- classeUsuarioSucesso (opcional): classe CSS contendo a configuracao a ser aplicada no campo, idCampo,
		  caso o usuario digite a informacao CORRESPONDENTE ao padrao. No caso de informacao opcional deverá
		  ser passado como parametro o valor ''
		- classeUsuarioErro (opcional): classe CSS contendo a configuracao a ser aplicada no campo, idCampo,
		  caso o usuario digite uma informacao INCOMPATÍVEL ao padrao. No caso de informacao opcional deverá
		  ser passado como parametro o valor ''
  Retorno: nenhum
  Exemplos de chamada de função: 
  		- validarInformacao('txtData','dd/mm/aaaa','',''); // se o usuário digitar no campo 00/00/0000 (valido) ou dd/00/0000
		  (invalido) sera aplicado ao campo a formatacao CSS default da funcao
  		- validarInformacao('txtData','dd/mm/aaaa','classeSucesso',''); // se o usuário digitar no campo 00/00/0000
		  sera aplicado ao campo a formatacao CSS contida dentro da classe classeSucesso, passada como parametro
		- validarInformacao('txtData','dd/mm/aaaa','classeSucesso','classeErro'); // se o usuário digitar no campo 0d/00/0000
		  sera aplicado ao campo a formatacao CSS contida dentro da classe classeErro, passada como parametro
  Ex: <input type="text" id="txtData" onclick="validarInformacao('txtData',/\d{2}\/\d{2}\/\d{4},'','msgErro')">
****************************************************************************************/
function validarInformacao(idCampo, expReg, classeUsuarioSucesso, classeUsuarioErro){
	var valor = document.getElementById(idCampo).value;
		
	var estiloSucesso = '.classeGenericaErro { background-color:#FFF4F4; border:#FF6666 1px solid; padding:3px;} ';
	var estiloErro = '.classeGenericaSucesso { background-color:#E2FFE1; color:#333333; border:green 1px solid; padding:3px; }';

	var style = document.createElement('style');	
	style.type = 'text/css';

	style.innerHTML = estiloSucesso + estiloErro;
	document.getElementsByTagName('head')[0].appendChild(style);
	
	// Expressao informada pelo usuario foi validada com sucesso pelo padrao
	if (expReg.test(valor)) {
		if (classeUsuarioSucesso == "") // Se o usuario nao especificar a classe de sucesso em CSS, "", usa a default da funcao -> classeGenericaSucesso
			document.getElementById(idCampo).className = 'classeGenericaSucesso';
		else  // Usa a classe de sucesso do usuário
			document.getElementById(idCampo).className = classeUsuarioSucesso;
	}	
	else if (classeUsuarioErro == "") // Se o usuario nao especificar a classe de erro em CSS, "", usa a default da funcao -> classeGenericaErro
			document.getElementById(idCampo).className = 'classeGenericaErro';
		 else // Usa a classe de erro do usuário
			document.getElementById(idCampo).className = classeUsuarioErro;
}