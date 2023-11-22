# STYLER
👨‍⚖️STYLER É UM SITE QUE RODA NO GITHUB PAGES.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA)
[![GitHub Repo stars](https://img.shields.io/badge/VEJA%20OS-VIDEOS-03A9F4?logo=youtube)](https://www.youtube.com/@vilhalva100/search?query=STYLER)

[![GitHub Repo stars](https://img.shields.io/badge/ENTRE%20NO-SITE-df1010?logo=google)](https://vilhalva.github.io/STYLER/STYLER.html) <br>

<img src="01_MENU/MIDIAS/ICONE HTML.ico" align="center" width="250"> <br>

# ATUALIZAÇÕES
## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.9%20--%2022%2F11%2F2023-blueviolet)
* 🈯️Em relação ao `MENU DE DOAÇÃO` o botão `fechar` trocou de nomeclatura: De `Voltar` para `Fechar`.
* 🈯️Os formulários(`FAZER DOAÇÃO`, `CADASTRO` e `LOGIN`), `BIOGRIA`, `PARCERIA` e `QR CODE` foram movidos para um diretório próprio.
* 🈯️Foram adicionados mais arquivos no `QR CODE.zip` e `DOACAO.zip`.
* 🈯️O `CSS` e `JS` da página principal (home - `STYLER.html`) são internos.
* ✅Na página `STYLER.html` foi adicionado um rodapé com as redes sociais.
* ✅Em relação ao formulário de cadastro houve grandes mudanças:
*   🔸O designer do formulário foi refeito.
*   🔸Os campos `idade` e `ano atual` foram apagados, ficando apenas `nome` e `email`.
*   🔸Os campos de textos do arquivo `txt` foram refeitos: Foi adicionado mais informações além de estarem separadas por categorias.
*   🔸Sempre que o usuário fizer o cadastro, será direcionado para a página de login (Antigamente entrava direto no site).
* ✅Correções de bugs e pequenas melhorias.

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.8%20--%2017%2F11%2F2023-blueviolet)
* ✅Com exceção de páginas puramente ortodoxas, o site inteiro está responsivo.
* ❇️No menu de `BOAS MÚSICAS`foi adicionado um botão de  buscador em JavaScript que permite o usuário digitar o nome da música e ele abre a página (VERSÃO ALPHA). Pra funcionar, ele segue esse modelo de link: "https://vilhalva.github.io/STYLER...{NOME DA MUSICA QUE USUARIO DIGITOU}.html". Se der o erro 404, aparece o aviso que ele digitou errado, ou a música não existe nesse site. EX: Quando o usuário digitar no buscador "EU AMO" (Os espaços adicionam "%20" no script, ficando "EU%20AMO"), ele abre a nova página através da requisição: "https://vilhalva.github.io/STYLER/.../EU%20TE%20AMO.html".
* ❇️O formulario de `ENTRAR NO SITE`, que continha uma pergunta estática, foi substituido pelo formulário de cadastro. 
### CADASTRO:
formulário de cadastro permite aos usuários inserir informações pessoais, como nome, e-mail, idade e ano atual. O botão `CADASTRAR` realiza a validação dos campos, garantindo que todos estejam preenchidos antes de permitir o cadastro. Após o preenchimento correto dos dados, o usuário é direcionado para uma página de confirmação temporária, acompanhada de uma animação de carregamento. Em seguida, ocorre o download de um arquivo chamado "STYLER.txt", contendo os dados cadastrados em um formato legível. Devido às limitações do GitHub Pages, não é possível armazenar essas informações em um banco de dados.
### LOGIN:
O formulário de login apresenta instruções claras sobre como proceder: o usuário deve fazer upload do arquivo que baixou do cadastro para acessar o site. Após o upload do arquivo, o sistema verifica se o mesmo está correto. Se o usuário enviar o arquivo errado ou não enviar nenhum arquivo, uma mensagem de erro é exibida. No entanto, devido à natureza estática do GitHub Pages, não há suporte para processamento de backend ou banco de dados. Portanto, essas verificações são limitadas ao escopo do front-end, utilizando JavaScript no navegador do usuário.
* ✅Em relação a página de doação: O tempo de espera para o botão `FECHAR` aparecer, foi reduzido de 60 para 30 segundos. Quando o usuário clica nesse botão, ele será redirecionado para a página de `CADASTRO`.
* ✅Correções de bugs e pequenas melhorias.

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.7%20--%2016%2F11%2F2023-blueviolet)
* ❇️Com exceção do menu `BOAS MUSICAS`, todos os diretórios foram reogarnizados em pastas raizes de projetos solos.
* ✅Favicon dos jogos foram corrigidos.
* ❇️Mais conteúdo foram publicados no:
*   🔸CURSO EM VIDEO;
*   🔸MEUS SITES.
* ✅Todas as músicas de `BOAS MÚSICAS` teve uma repaginação no designer; Ficando mais responsivo e suave.
* ✅O `WORD BÁSICO` teve uma repaginação no designer; Ficando mais responsivo e suave.
* ✅A função `LIMPAR` foi corrigido de `CONVERTER UPPER`. Agora todos os campos são limpos.
* ✅A função `LIMPAR` foi corrigido de `IFRAME DO YOUTUBE`. Agora todos os campos são limpos.
* ✅Correções de bugs e pequenas melhorias.

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.6%20--%2003%2F09%2F2023-blueviolet)
* ❇️Quando o usuário clicar para entrar no site, ele será direcionado a uma página de doação: Ele só será redirecionado ao formulário se baixar o ZIP da doação ou esperar 60 segundos para clicar no botão "FECHAR".
* ❇️Mudamos o formulário de entrada:
* 🔸Mudamos a pergunta para: "EM QUE ANO O CRIADOR DO SITE NASCEU?";
* 🔸Agora o site abre na mesma aba quando o usuário digita a resposta certa.
* 🔸Mudamos a cor e background da resposta final (Se acertou, errou ou deixou vazio).
* 🔸Foi adicionado uma animação de "uma bolinha" antes de entrar no site.
* 🔸O botão "IFRAME" foi trocado para o botão "VOLTAR" (Será direcionado a uma página de doação).
* ❎O SUBMENU com as páginas "MINHA OPINIÃO" Foram excluidas
* ✅Melhoramos a Biografia.
* ❇️Adicionamos novos Submenus ao Menu Principal:
* 🔸MEUS SITES
* 🔸APLICATIVOS
* 🔸CALCULADORA
* 🔸JOGOS
* 🔸SITES DE NOTICIAS
* 🔸INTELIGÊNCIAS ARTIFICIAIS
* 🔸PLAYLISTS DO YOUTUBE
* ✅Refizemos o Submenu "CANAIS DO YOUTUBE" com apenas botões que direcionam aos respectivos canais.
* ✅Correções de bugs e pequenas melhorias.

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.5%20--%2018%2F01%2F2023-blueviolet)
* ❇️Mudamos um pouco o inicio: 
* 🔸No lugar da enorme quantidade de botões: Colocamos o menu "hamburguinho". Nele foram inseridas todas as opções; Exceto "ENTRAR".
* 🔸Criamos um submenu apenas para grupos e canais parceiros do Telegram.
* ❎O botão footer foi apagado. A data do site está no texto e source code está no menu "hamburguinho".
* ❎O botão de voltar foi apagado em todo o site. Achamanos que não tem necessidade em mantê-lo, pois os navegadores já tem a função nativamente (E até melhor).
* ✅No painel do titulo do MENU PRINCIPAL: Foi incerido as melhores páginas do site.
* ❇️Agora quando o usuário clica para entrar no site: Aparece um formulário com a pergunta: "Que ano esse site foi criado?". Caso o usuário acerte, entrará na versão completa. Caso erre, ele poderá optar apenas pela versão IFRAME.
* ✅Correções de bugs e pequenas melhorias.
![](https://i.imgur.com/waxVImv.png)

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.4%20--%2007%2F12%2F2022-blueviolet)
* ✅Ao clicar no "QR CODE" : Será perguntado se o usuário quer mesmo baixar o QR CODE do site. Se clicar em "SIM" será feito o download automaticamente. Se clicar em "NÃO" voltará ao inicio.
* ✅Corrigimos a centralização das fontes de algumas páginas.
* ✅Todos os botões do "nav" do menu principal foram movidos para o inicio. Além de imprementarmos links de grupos e canais parceiros do Telegram.
* ❇️Ao iniciar: O usuário poderá escolher navegar na versão iframe do site ou a versão compreta. Usamos a moldura de um "tablet colorido".
* ✅No fim do inicio: Foi colocado a data de criação com o hyperlink do seu repositório.
* ❇️Agora temos o suporte do CSS externo para a execução de Tabelas.
* ❇️O JavaScript foi imprementado agora pelo projeto "MENU RESPONSIVO" do Curso em Video.
* ✅Correções de bugs e grandes melhorias.
![](https://i.imgur.com/waxVImv.png)

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.3%20--%2028%2F11%2F2022-blueviolet)
* ❇️Agora o CSS está separado de todos os HTMLs em arquivos diferentes. Além dos arquivos terem o mesmo nome que o HTML.
* 🈯️O HTML, CSS e MIDIAS agora estão separados por pastas com base no nome das páginas.
* ❇️Criamos uma página inicial padrão para o site, através dele você irá acessar ao menu principal. Isso é para evitar problemas com a URL, caso mudemos algum Arquivo/Pasta de lugar. Nela temos:
* 🔸ENTRAR
* 🔸QR CODE 
* 🔸GITHUB
* 🔸CRIADOR
* 🔸CONTATO
* 🔸CREDITOS
* ✅Agora você pode baixar o QR CODE apenas apertando o botão "QR CODE" no inicio.
* 🈯️Criamos um arquivo CSS só para os SUBMENUS. Também incrementamos novas Tipografias para os MENUS.
* ❇️Foi adicionado um novo elemento ao MENU PRINCIPAL: "MELHORES MUSICAS". Onde temos a incorporação de videos do YouTube com a letra de cada música.
* ✅Corrigirmos erros ortograficos e falhas na formatação do HTML;
* ✅Correções de bugs e pequenas melhorias.
![](https://i.imgur.com/waxVImv.png)

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.2%20--%2018%2F11%2F2022-blueviolet)
* ✅Colocamos emojis em cada botão apenas no menu principal;
* ❇️No fim do MENU principal, colocamos o botão para acessar outro MENU: Contendo os melhores sites que já visitei;
* ❇️No final do Menu Principal, tem o link para acessar ao Menu de Agradecimentos (Créditos) e também um pouco sobre o criador do Site;
* ❇️Agora todas as páginas tem o botão no final para voltar ao MENU;
* 🈯️Tiramos todos os "targets" de todas as páginas;
* ✅Agora é possivel baixar a imagem do QR CODE do site em formato de zip apenas clicando na imagem; 
* ✅A página "VIDEOS INTEGRADOS" mudou de nome, agora é "VIDEOS DO YOUTUBE". Nessa página, fizemos grandes melhorias:
* 🔸O designer da página está linda.
* 🔸Tem 3 videos de cada canal.
* 🔸O titulo é hiperlink.
* ❎Duas páginas inutéis foram apagadas;
* ❇️Adicionamos 4 Submenus vinculados ao MENU PRINCIPAL. Cada página tem sua própria categoria;
* ✅Arredodamos as bordas dos botões dos MENUS;
* 🈯️Erros com relação a compatibilidade do HTML com CSS externos foram corrigidos. Sendo que a maioria usa o CSS interno.
![](https://i.imgur.com/waxVImv.png)

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.1%20--%2015%2F11%2F2022-blueviolet)
* ✳️Mudamos o nome do site para STYLER. Sabendo disso, sua url mudou;
* ❎Algumas páginas irrelavantes foram removidas;
* ❎Tiramos a numeração tanto dos arquivos quanto no menu principal;
* ❎Apagamos mídias e CSS que nunca são chamadas pelo HTML;
* ✅Colocamos um padrão na favicon: HTML para menu principal e CSS para outras páginas;
* ✅Trocamos a cor do menu principal; Tendo mais contraste no degradê.
![](https://i.imgur.com/waxVImv.png)

## ![GitHub Repo stars](https://img.shields.io/badge/-VERS%C3%83O%201.0%20--%2006%2F10%2F2022-blueviolet)
* ❇️Foi lançado agora o meu primeiro site. Se trata de um menu com botões contendo hiperlinks que fazem você navegar pelas principais faqs do meu curso de HTML e CSS: Como se fosse um mini navegador. Atualmente contém apenas 20 artigos com textos, estilos e mídias. Atualmente o código está sendo executado através do recurso do GITHUB PAGES.
![](https://i.imgur.com/waxVImv.png)
