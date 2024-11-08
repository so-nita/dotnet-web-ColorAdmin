/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'pt' ]: { dictionary, getPluralForm } } = {"pt":{"dictionary":{"Cancel":"Cancelar","Clear":"Limpar","Remove color":"Remover cor","Restore default":"Restaurar predefinição","Save":"Guardar","Show more items":"Mostrar mais itens","%0 of %1":"%0 de %1","Cannot upload file:":"Não foi possível carregar o ficheiro:","Rich Text Editor. Editing area: %0":"Editor de Texto Formatado. Área de edição: %0","Insert with file manager":"Inserir com o gestor de ficheiros","Replace with file manager":"Substituir com o gestor de ficheiros","Insert image with file manager":"Inserir imagem com o gestor de ficheiros","Replace image with file manager":"Substituir imagem com o gestor de ficheiros","File":"Ficheiro","With file manager":"Com o gestor de ficheiros","Toggle caption off":"Desativar legenda","Toggle caption on":"Ativar legenda","Content editing keystrokes":"Batimentos de teclas para editar o conteúdo","These keyboard shortcuts allow for quick access to content editing features.":"Estes atalhos de teclado permitem aceder rapidamente às funcionalidades de edição de conteúdo.","User interface and content navigation keystrokes":"Batimentos de teclas para navegar pela interface de utilizador e pelo conteúdo","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Para navegar de forma mais eficiente pela interface de utilizador do CKEditor 5, utilize os seguintes batimentos de teclas.","Close contextual balloons, dropdowns, and dialogs":"Fechar balões contextuais, menus suspensos e caixas de diálogo","Open the accessibility help dialog":"Abrir a caixa de diálogo de ajuda de acessibilidade","Move focus between form fields (inputs, buttons, etc.)":"Mover o foco entre os campos do formulário (entradas, botões, etc.)","Move focus to the menu bar, navigate between menu bars":"Mover o foco para a barra de menu, navegar entre as barras de menu","Move focus to the toolbar, navigate between toolbars":"Mover o foco para a barra de ferramentas, navegar entre barras de ferramentas","Navigate through the toolbar or menu bar":"Navegar pela barra de ferramentas ou pela barra de menu","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Executar o botão atualmente em foco. A execução de botões que interagem com o conteúdo do editor coloca novamente o foco sobre o conteúdo.","Accept":"Aceitar"},getPluralForm(n){return (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;}}};
e[ 'pt' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pt' ].dictionary = Object.assign( e[ 'pt' ].dictionary, dictionary );
e[ 'pt' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
