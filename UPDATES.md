# ATUALIZAÇÕES:
## VERSÃO 2.5 - 11/08/2024:
* ✅ **Grandes mudanças na página `HOME`:**
    * 🔸 Foi implementada a funcionalidade de alternância entre os temas `CLARO` e `ESCURO` através de um botão flutuante. Para suportar essa funcionalidade, foi necessário criar um novo `index.html` na raiz do repositório. Esse arquivo exibe um `spinner` de carregamento antes de redirecionar para a página inicial localizada em `./03_HOME/01_INICIO/index.html`.
    * 🔸 Implementamos, através do `Media Queries`, o ajuste das fontes dos componentes conforme o tamanho e tipo de tela (Celular/PC).
    Aqui está uma versão aprimorada e mais detalhada da sua descrição:
    * 🔸 **Atualização no Menu de Itens:** As antigas páginas estáticas foram substituídas por modernos e interativos **POP MODAIS**. Isso vale para as opções de `LINKS`, `QRCODE`, `PARCERIA`, `CODIGO` e `CONTATO`.
* ✅ **Liberação do `MENU DE LINKS`:** 
  * A partir do botão `LINKS` na `HOME`, o `MENU` está novamente disponível com os recursos de `TEMAS` e `Media Queries`. Agora, não está mais no formato ZIP:
    * 🔸 IDES ONLINE (NOVO)
    * 🔸 SITES DE NOTÍCIAS
    * 🔸 INTELIGÊNCIAS ARTIFICIAIS
    * 🔸 PLAYLISTS DO YOUTUBE
    * 🔸 CANAIS DO YOUTUBE
    * 🔸 SITES CIENTÍFICOS
    * 🔸 FILMES E SÉRIES
    * 🔸 MELHORES SITES
    * 🔸 SITES INÚTEIS
    * 🔸 CREDITOS
* ✅ **Mudanças na validação de `CADASTRO` e `LOGIN`:**
    * 🔸 **Botões `Desabilitados`:** Agora, os botões como `CADASTRAR`, `ENTRAR` (para `LOGIN`) e `LIMPAR` só serão habilitados quando os campos estiverem preenchidos.
    * 🔸 **Apenas no Formulário de Login:** Agora, não é mais permitido fazer upload de múltiplos arquivos. Caso o usuário envie o arquivo errado ou múltiplo: Ele será redirecionado para a página de `CADASTRO` após o alert.
* ✅ O design do `spinner` de `VALIDAÇÃO` foi aprimorado: agora ele está maior, com novas cores e efeitos visuais adicionais.
* ✅ **Adição do `BUSCADOR`:** O Buscador/Pesquisador (O mesmo utilizado no SUBMENU `MUSICAS`) foi adicionado também as seguintes páginas: 
    * 🔸 ENTRA NO SITE
    * 🔸 MENU PRINCIPAL
    * 🔸 CURSO EM VIDEO (SUBMENU)
    * 🔸 CALCULADORAS (SUBMENU)
    * 🔸 APLICATIVOS (SUBMENU)
    * 🔸 JOGOS (SUBMENU)
* ✅ **Mudanças no `MENU PRINCIPAL`:**
    * 🔸 O `h1` do `MENU PRINCIPAL` mudou de `NESSE SITE BIZARRO VOCÊ ENCONTRARÁ DE TUDO` para `CLIQUE NOS BOTOES E SE DIVIRTA!`.
    * 🔸 O nome de `BOAS MUSICAS` mudou para `MUSICAS` e `BONS JOGOS` para `JOGOS`.
* ✅ **Mudanças nos `SUBMENUS`:**
    * 🔸 **Ícones Favicon:** Todos os projetos agora utilizam ícones favicon personalizados de acordo com o tema.
    * 🔸 **Título em Maiúsculas:** Todos os projetos têm os títulos exibidos em letras maiúsculas.
    * 🔸 **Renomeação de Arquivos Padrão:** Os arquivos padrão, como `index.html`, `style.css`, e `script.js`, foram renomeados para um formato consistente.
    * 🔸 **Remoção de Prefixos nos Nomes dos Arquivos:** Prefixos iniciais foram removidos dos nomes dos arquivos dos submenus. Por exemplo, `MENU_APLICATIVOS.html` foi alterado para `APLICATIVOS.html`.
    * 🔸 **Renomeação do Submenu `BOAS MÚSICAS`:** O submenu `BOAS MÚSICAS` foi renomeado para `MÚSICAS`.
* ✅ **Mudanças no SUBMENU `MÚSICAS`:**
    * 🔸 **Melhorias no `BUSCADOR`:** 
      * 🔹 A validação do buscador foi atualizada. Agora, os botões `BUSCAR` e `LIMPAR` só serão habilitados quando o campo de pesquisa estiver preenchido. 
      * 🔹 Adicionei um novo recurso ao JavaScript que valida o acesso à página, garantindo que o conteúdo da página seja exibido apenas após a verificação bem-sucedida da navegação correta. Ela foi incluída para alterar o estilo do corpo da página, tornando-o visível apenas depois que a validação confirmar que o usuário o acessou por meio do submenu apropriado. Dessa forma, caso a navegação não seja validada, a página permanecerá oculta (Também se o JavaScript estiver desabilitado).
      * 🔹 Foi adicionado um novo recurso de opacidade onde o elemento que exibe mensagens de erro (`#errorMessage`) começa com opacidade zero, permanecendo invisível até que um erro ocorra.
    * 🔸 Mudamos as cores dos componentes do css universal (`MUSICAS.css`), deixando um pouco mais escuro e suave.
    * 🔸 Implementamos `Media Queries` para ajustar fontes e cores dos componentes conforme o tamanho e tipo de tela no css universal para Celular/PC.
---

## VERSÃO 2.4 - 07/08/2024:
* ✅ **Grandes mudanças na página `HOME`:**
    * 🔸 O nome do arquivo da `HOME` foi alterado de `STYLER.html` para `index.html`. A URL do site agora é [https://vilhalva.github.io/STYLER/index.html](https://vilhalva.github.io/STYLER/index.html) em vez de [https://vilhalva.github.io/STYLER/STYLER.html](https://vilhalva.github.io/STYLER/STYLER.html).
    * 🔸 Os arquivos de `CSS` e `JS` foram movidos para `./03_HOME/01_INICIO`.
    * 🔸 O `MENU DE ITENS` agora utiliza o estilo `MENU HAMBURGUINHO`, que é um menu responsivo com um ícone de "menu" (hambúrguer). Em telas grandes, o menu é exibido de forma expandida e sempre visível, enquanto em telas pequenas ele é oculto e só é revelado quando o ícone de menu é clicado. A visibilidade do menu é ajustada automaticamente com base na largura da tela.
    * 🔸 Alteramos as cores de alguns componentes, priorizando o uso de variáveis de cor. Com o uso de `Media Queries`, temos cores diferentes para cada tamanho e tipo de tela.
* ✅ **Mudanças nos `MENUS`e `SUBMENUS`:**
    * 🔸 O `nav` do `MENU PRINCIPAL` foi removido.
    * 🔸 Tanto o `MENU PRINCIPAL` quanto os `SUBMENUS` utilizam os mesmos arquivos CSS.
    * 🔸 Implementamos `Media Queries` para ajustar fontes e cores dos componentes conforme o tamanho e tipo de tela (Celular/PC).
* ✅ **Novos Temas: Claro e Escuro:**  
  - **Adicionamos a funcionalidade de troca de tema**: Agora é possível alternar entre o tema `CLARO` e o tema `ESCURO` nas seguintes páginas:
    * 🔸 **ENTRAR NO SITE**
    * 🔸 **MENU PRINCIPAL**
    * 🔸 **SUBMENUS**
  - **CSS individual para cada tema**: Desenvolvi folhas de estilo (`CSS`) dedicadas para cada tema, incluindo suporte a `Media Queries`. Isso permite uma personalização eficaz e adaptativa, com a possibilidade de expandir para até 4 temas diferentes para todos os tamanhos de tela.
* ✅ Adicionamos o novo método de Entrada, o [CAÇA NIQUEL](https://github.com/penguinuux/maquina-caca-niquel-ui).
* ✅ Todos os componentes do site foram organizados em seus respectivos diretórios e subdiretórios: `01_ENTRAR`, `02_MENU`, `03_HOME` e `04_SITE`.
* ✅ O sistema de `VALIDAÇÃO DE ENTRADA` agora suporta acesso via `file`, facilitando testes em servidores locais.
* ✅ Todas as músicas do `MENU DE BOAS MÚSICAS` agora têm seu próprio ícone de favicon.
* ✅ **Correções de bugs e pequenas melhorias.**
---

## VERSÃO 2.3 - 02/08/2024:
* ✅ **Remoção da seção de `BIOGRAFIA`.**
* ✅ **Atualizações no `MENU PRINCIPAL`:** 
  * Foram removidos os seguintes itens:
    * 🔸 SITES DE NOTÍCIAS
    * 🔸 INTELIGÊNCIAS ARTIFICIAIS
    * 🔸 PLAYLISTS DO YOUTUBE
    * 🔸 CANAIS DO YOUTUBE
    * 🔸 SITES CIENTÍFICOS
    * 🔸 FILMES E SÉRIES
    * 🔸 MELHORES SITES
    * 🔸 SITES INÚTEIS
  * Esses itens foram substituídos por `MENUS DE LINKS`, que estão disponíveis em um arquivo zip na página inicial, pois foram descontinuados e não serão mais utilizados.
* ✅ **O menu de `FAZER DOAÇÃO` foi removido** e substituído por novos métodos de acesso ao site:
  * 🔸 **CADASTRAR-SE**
  * 🔸 **FAZER LOGIN**
  * 🔸 **RESPONDER PERGUNTA SOBRE O SITE**
  * 🔸 **RESPONDER PERGUNTA DE MATEMÁTICA**
  * 🔸 **JOGAR NO SORTEIO**
  * 🔸 **JOGAR BINGO**
* ✅ **Unificação do `MENU DE ENTRADA`:** Todas as opções agora direcionam para uma única página de `VALIDAÇÃO`.
* ✅ **Correções de bugs e pequenas melhorias.**
---

## VERSÃO 2.2 - 24/01/2024:
* ✅Adicionamos um sistema de validação semelhante ao `MENU-PRINCIPAL` e `SUBMENUS` para detectar se o usuário passou pela página de Login ou Doação ao acessar o `BUSCADOR DE BOAS MÚSICAS`.
* ✅Editamos os links do `nav` do "MENU-PRINCIPAL", incluindo os links do canal Vilhalva, Canal Coders e Github.
* ✅Implementamos o botão de `VOLTAR` no aplicativo `IFRAME DO YOUTUBE`.
* ✅Introduzimos o botão de `MISTO` no aplicativo `CONVERTER PARA UPPER`.
* ✅Criamos o formulário de `AUTENTICAÇÃO (ENTRAR)`, semelhante ao formulário de `LOGIN`. Ao fazer o DOWNLOAD do arquivo de Doação, o usuário precisará fazer o upload do mesmo neste formulário para acessar. A principal diferença é que este formulário aceita arquivos múltiplos.
* ✅Na página de `DOAÇÃO`, adicionamos um novo botão chamado `ENTRAR`. Ao ser clicado, o usuário será direcionado exclusivamente para o formulário de autenticação (Sem a necessidade de baixar o pix de doação novamente).
* ✅Realizamos pequenas modificações na seção da `BIOGRAFIA`:
*   🔸Removemos os Iframes de vídeos;
*   🔸Adicionamos mais de 18 fotos de Projetos, utilizando o recurso de SLIDES CAROUSEL do `BOOTSTRAP`.
* ✅O `FORMATADOR DE LETRAS` passou pelas seguintes modificações:
*   🔸Todos `CASES` foram corrigidos com suas arrays;
*   🔸Novos `MENUS DE FORMATOS` foram adicionados.
* ✅Em `APLICATIVOS` o `CONVERSOR DE BINARIOS` foi adicionado.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 2.1 - 01/12/2023:
* ✅Houve algumas melhorias no `BUSCADOR DE BOAS MÚSICAS`:
*   🔸Agora aparece o painel de `SUGESTÃO`. Enquanto o usuário estiver digitando o nome de uma música, irá aparecer seção de músicas sugeridas.
*   🔸Foi criado dois botões diferentes para `YOUTUBE`: `⬆️YOUTUBE` Significa que não irá abrir o `IFRAME DE VIDEOS` na mesma aba quando for clicado, enquanto o `⬇️YOUTUBE` significa que irá abrir o `IFRAME DE VIDEOS` depois de 3 segundos.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 2.0 - 28/11/2023:
* ✅Foi implementado um recurso de validação que verifica se o usuário acessou o `MENU PRINCIPAL` após passar pela página de login ou de doação, ou acessou algum `SUBMENU` após passar pelo `MENU PRINCIPAL`. Ao detectar que o usuário acessou o `MENU PRINCIPAL` sem passar pelos processos de login ou doação, ou acessou algum `SUBMENU` sem passar pelo `MENU PRINCIPAL`, uma mensagem de alerta é exibida, informando sobre a detecção dessa atividade. O usuário é então redirecionado automaticamente para a página inicial. Isso ajuda a garantir que o acesso às seções principais do site seja restrito apenas aos usuários que seguiram os passos requeridos.
* ✅Você pode ter notado que, ao acessar nosso site, algumas funcionalidades ficam indisponíveis ou o layout não é exibido corretamente. Isso acontece quando o JavaScript está desabilitado no seu navegador. Se você o desabilitou ou está usando um navegador que não o suporta, você verá tanto o `MENU PRINCIPAL` quanto os `SUBMENUS` em branco (Sem conteúdo).
* ✅Houve uma pequena melhoria nos formulários de `CADASTRO` e `LOGIN`: Se o usuário não seguir algum requerimento, todos os campos serão limpos após o alerta de erro. também foi adicionado o botão de `LIMPAR` do formulário de `LOGIN`.
* ✅O submenu `BOAS MÚSICAS` passou pelas seguintes modificações:
*   🔸As músicas gospels vem antes das músicas seculares.
*   🔸As músicas gospels estão definidas com "🔴", enquanto as músicas seculares são "🔵".
*   🔸Mais músicas foram adicionadas.
* ✅2 `SUBMENUS` foram adicionados:
*   🔸 `SITES CIENTIFICOS`
*   🔸 `FILMES E SÉRIES`
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.9 - 22/11/2023:
* ✅Em relação ao `MENU DE DOAÇÃO` o botão `fechar` trocou de nomeclatura: De `Voltar` para `Fechar`.
* ✅Os formulários(`FAZER DOAÇÃO`, `CADASTRO` e `LOGIN`), `BIOGRIA`, `PARCERIA` e `QR CODE` foram movidos para um diretório próprio.
* ✅Foram adicionados mais arquivos no `QR CODE.zip` e `DOACAO.zip`.
* ✅O `CSS` e `JS` da página principal (home - `STYLER.html`) agora são internos.
* ✅Na página `STYLER.html` foi adicionado um rodapé com as redes sociais do dono.
* ✅Em relação ao formulário de cadastro houve grandes mudanças:
*   🔸O designer do formulário foi refeito.
*   🔸Os campos `idade` e `ano atual` foram apagados, ficando apenas `nome` e `email`.
*   🔸Aprimoramos a validação dos campos para garantir maior precisão. Agora, para que o cadastro seja aprovado, é necessário que o nome contenha apenas letras e tenha mais de 10 caracteres. Quanto ao campo de e-mail, é imprescindível a presença do símbolo "@" e a extensão ".com".
*   🔸Os campos de textos do arquivo `txt` foram refeitos: Foi adicionado mais informações além de estarem separadas por categorias.
*   🔸Sempre que o usuário fizer o cadastro, será direcionado para a página de login (Antigamente entrava direto no site).
* ✅O formulário de login foi cuidadosamente aprimorado para oferecer uma experiência mais segura e eficiente. Agora, ele apresenta uma validação refinada para garantir a integridade do processo de cadastro. Se um usuário tentar enviar múltiplos arquivos com o padrão `STYLER (n).txt`, será exibido um aviso especial indicando que o cadastramento múltiplo não é permitido. Além disso, para um cadastro individual ser aprovado, é essencial que o arquivo enviado tenha o nome exato `STYLER.txt`. Essas melhorias visam proporcionar uma interação mais intuitiva e evitar possíveis equívocos durante o procedimento de login."
* ✅Implementamos melhorias no buscador de músicas (`BOAS MÚSICAS`) para proporcionar uma experiência mais eficiente e informativa. Agora, ao ocorrer um erro 404, indicando que a música não foi encontrada no site, o sistema exibirá dois botões para facilitar a pesquisa em outros sites.
Esses botões, intitulados "VAGALUME", "LETRAS" e "YOUTUBE"(Abre o site oficial do Youtube em nova aba, e após 3 segundos na local abre o `IFRAME DE VIDEOS` - Você pode copiar o link da música para reproduzir em iframe), aparecerão de maneira clara e intuitiva, permitindo que o usuário clique em qualquer um deles para abrir uma nova aba no navegador. Além disso, o texto digitado pelo usuário no campo de busca será automaticamente incluído na consulta aos outros sites, proporcionando uma transição suave entre a pesquisa local e a web. 
Essa atualização visa oferecer aos usuários uma solução prática e rápida quando a música desejada não está disponível no site atual, incentivando uma busca mais abrangente em outras plataformas de letras de músicas.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.8 - 17/11/2023:
* ✅Com exceção de páginas puramente ortodoxas, o site inteiro está responsivo.
* ✅No menu de `BOAS MÚSICAS`foi adicionado um botão de  buscador em JavaScript que permite o usuário digitar o nome da música e ele abre a página (VERSÃO ALPHA). Pra funcionar, ele segue esse modelo de link: "https://vilhalva.github.io/STYLER...{NOME DA MUSICA QUE USUARIO DIGITOU}.html". Se der o erro 404, aparece o aviso que ele digitou errado, ou a música não existe nesse site. EX: Quando o usuário digitar no buscador "EU AMO" (Os espaços adicionam "%20" no script, ficando "EU%20AMO"), ele abre a nova página através da requisição: "https://vilhalva.github.io/STYLER/.../EU%20TE%20AMO.html".
* ✅O formulario de `ENTRAR NO SITE`, que continha uma pergunta estática, foi substituido pelo formulário de cadastro. 
### CADASTRO:
formulário de cadastro permite aos usuários inserir informações pessoais, como nome, e-mail, idade e ano atual. O botão `CADASTRAR` realiza a validação dos campos, garantindo que todos estejam preenchidos antes de permitir o cadastro. Após o preenchimento correto dos dados, o usuário é direcionado para uma página de confirmação temporária, acompanhada de uma animação de carregamento. Em seguida, ocorre o download de um arquivo chamado "STYLER.txt", contendo os dados cadastrados em um formato legível. Devido às limitações do GitHub Pages, não é possível armazenar essas informações em um banco de dados.
### LOGIN:
O formulário de login apresenta instruções claras sobre como proceder: o usuário deve fazer upload do arquivo que baixou do cadastro para acessar o site. Após o upload do arquivo, o sistema verifica se o mesmo está correto. Se o usuário enviar o arquivo errado ou não enviar nenhum arquivo, uma mensagem de erro é exibida. No entanto, devido à natureza estática do GitHub Pages, não há suporte para processamento de backend ou banco de dados. Portanto, essas verificações são limitadas ao escopo do front-end, utilizando JavaScript no navegador do usuário.
* ✅Em relação a página de doação: O tempo de espera para o botão `FECHAR` aparecer, foi reduzido de 60 para 30 segundos. Quando o usuário clica nesse botão, ele será redirecionado para a página de `CADASTRO`.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.7 - 16/11/2023:
* ✅Com exceção do menu `BOAS MUSICAS`, todos os diretórios foram reogarnizados em pastas raizes de projetos solos.
* ✅Favicon dos jogos foram corrigidos.
* ✅Mais conteúdo foram publicados no:
*   🔸CURSO EM VIDEO;
*   🔸MEUS SITES.
* ✅Todas as músicas de `BOAS MÚSICAS` teve uma repaginação no designer; Ficando mais responsivo e suave.
* ✅O `WORD BÁSICO` teve uma repaginação no designer; Ficando mais responsivo e suave.
* ✅A função `LIMPAR` foi corrigido de `CONVERTER UPPER`. Agora todos os campos são limpos.
* ✅A função `LIMPAR` foi corrigido de `IFRAME DO YOUTUBE`. Agora todos os campos são limpos.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.6 - 03/09/2023:
* ✅Quando o usuário clicar para entrar no site, ele será direcionado a uma página de doação: Ele só será redirecionado ao formulário se baixar o ZIP da doação ou esperar 60 segundos para clicar no botão "FECHAR".
* ✅Mudamos o formulário de entrada:
* 🔸Mudamos a pergunta para: "EM QUE ANO O CRIADOR DO SITE NASCEU?";
* 🔸Agora o site abre na mesma aba quando o usuário digita a resposta certa.
* 🔸Mudamos a cor e background da resposta final (Se acertou, errou ou deixou vazio).
* 🔸Foi adicionado uma animação de "uma bolinha" antes de entrar no site.
* 🔸O botão "IFRAME" foi trocado para o botão "VOLTAR" (Será direcionado a uma página de doação).
* ✅O SUBMENU com as páginas "MINHA OPINIÃO" Foram excluidas
* ✅Melhoramos a Biografia.
* ✅Adicionamos novos Submenus ao Menu Principal:
* 🔸MEUS SITES
* 🔸APLICATIVOS
* 🔸CALCULADORA
* 🔸JOGOS
* 🔸SITES DE NOTICIAS
* 🔸INTELIGÊNCIAS ARTIFICIAIS
* 🔸PLAYLISTS DO YOUTUBE
* ✅Refizemos o Submenu "CANAIS DO YOUTUBE" com apenas botões que direcionam aos respectivos canais.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.5 - 18/01/2023:
* ✅Mudamos um pouco o inicio: 
* 🔸No lugar da enorme quantidade de botões: Colocamos o menu "hamburguinho". Nele foram inseridas todas as opções; Exceto "ENTRAR".
* 🔸Criamos um submenu apenas para grupos e canais parceiros do Telegram.
* ✅O botão footer foi apagado. A data do site está no texto e source code está no menu "hamburguinho".
* ✅O botão de voltar foi apagado em todo o site. Achamanos que não tem necessidade em mantê-lo, pois os navegadores já tem a função nativamente (E até melhor).
* ✅No painel do titulo do MENU PRINCIPAL: Foi incerido as melhores páginas do site.
* ✅Agora quando o usuário clica para entrar no site: Aparece um formulário com a pergunta: "Que ano esse site foi criado?". Caso o usuário acerte, entrará na versão completa. Caso erre, ele poderá optar apenas pela versão IFRAME.
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.4 - 07/12/2022:
* ✅Ao clicar no "QR CODE" : Será perguntado se o usuário quer mesmo baixar o QR CODE do site. Se clicar em "SIM" será feito o download automaticamente. Se clicar em "NÃO" voltará ao inicio.
* ✅Corrigimos a centralização das fontes de algumas páginas.
* ✅Todos os botões do "nav" do menu principal foram movidos para o inicio. Além de imprementarmos links de grupos e canais parceiros do Telegram.
* ✅Ao iniciar: O usuário poderá escolher navegar na versão iframe do site ou a versão compreta. Usamos a moldura de um "tablet colorido".
* ✅No fim do inicio: Foi colocado a data de criação com o hyperlink do seu repositório.
* ✅Agora temos o suporte do CSS externo para a execução de Tabelas.
* ✅O JavaScript foi imprementado agora pelo projeto "MENU RESPONSIVO" do Curso em Video.
* ✅Correções de bugs e grandes melhorias.
---

## VERSÃO 1.3 - 28/11/2022:
* ✅Agora o CSS está separado de todos os HTMLs em arquivos diferentes. Além dos arquivos terem o mesmo nome que o HTML.
* ✅O HTML, CSS e MIDIAS agora estão separados por pastas com base no nome das páginas.
* ✅Criamos uma página inicial padrão para o site, através dele você irá acessar ao menu principal. Isso é para evitar problemas com a URL, caso mudemos algum Arquivo/Pasta de lugar. Nela temos:
* 🔸ENTRAR
* 🔸QR CODE 
* 🔸GITHUB
* 🔸CRIADOR
* 🔸CONTATO
* 🔸CREDITOS
* ✅Agora você pode baixar o QR CODE apenas apertando o botão "QR CODE" no inicio.
* ✅Criamos um arquivo CSS só para os SUBMENUS. Também incrementamos novas Tipografias para os MENUS.
* ✅Foi adicionado um novo elemento ao MENU PRINCIPAL: "MELHORES MUSICAS". Onde temos a incorporação de videos do YouTube com a letra de cada música.
* ✅Corrigirmos erros ortograficos e falhas na formatação do HTML;
* ✅Correções de bugs e pequenas melhorias.
---

## VERSÃO 1.2 - 18/11/2022:
* ✅Colocamos emojis em cada botão apenas no menu principal;
* ✅No fim do MENU principal, colocamos o botão para acessar outro MENU: Contendo os melhores sites que já visitei;
* ✅No final do Menu Principal, tem o link para acessar ao Menu de Agradecimentos (Créditos) e também um pouco sobre o criador do Site;
* ✅Agora todas as páginas tem o botão no final para voltar ao MENU;
* ✅Tiramos todos os "targets" de todas as páginas;
* ✅Agora é possivel baixar a imagem do QR CODE do site em formato de zip apenas clicando na imagem; 
* ✅A página "VIDEOS INTEGRADOS" mudou de nome, agora é "VIDEOS DO YOUTUBE". Nessa página, fizemos grandes melhorias:
* 🔸O designer da página está linda.
* 🔸Tem 3 videos de cada canal.
* 🔸O titulo é hiperlink.
* ✅Duas páginas inutéis foram apagadas;
* ✅Adicionamos 4 Submenus vinculados ao MENU PRINCIPAL. Cada página tem sua própria categoria;
* ✅Arredodamos as bordas dos botões dos MENUS;
* ✅Erros com relação a compatibilidade do HTML com CSS externos foram corrigidos. Sendo que a maioria usa o CSS interno.
---

## VERSÃO 1.1 - 15/11/2022:
* ✅Mudamos o nome do site para STYLER. Sabendo disso, sua url mudou;
* ✅Algumas páginas irrelavantes foram removidas;
* ✅Tiramos a numeração tanto dos arquivos quanto no menu principal;
* ✅Apagamos mídias e CSS que nunca são chamadas pelo HTML;
* ✅Colocamos um padrão na favicon: HTML para menu principal e CSS para outras páginas;
* ✅Trocamos a cor do menu principal; Tendo mais contraste no degradê.
---

## VERSÃO 1.0 - 06/10/2022:
* ✅Foi lançado agora o meu primeiro site. Se trata de um menu com botões contendo hiperlinks que fazem você navegar pelas principais faqs do meu curso de HTML e CSS: Como se fosse um mini navegador. Atualmente contém apenas 20 artigos com textos, estilos e mídias. Atualmente o código está sendo executado através do recurso do GITHUB PAGES.
