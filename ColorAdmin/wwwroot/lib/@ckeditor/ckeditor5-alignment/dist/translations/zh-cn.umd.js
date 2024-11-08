/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'zh-cn' ]: { dictionary, getPluralForm } } = {"zh-cn":{"dictionary":{"Align left":"左对齐","Align right":"右对齐","Align center":"居中对齐","Justify":"两端对齐","Text alignment":"对齐","Text alignment toolbar":"对齐工具栏"},getPluralForm(n){return 0;}}};
e[ 'zh-cn' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'zh-cn' ].dictionary = Object.assign( e[ 'zh-cn' ].dictionary, dictionary );
e[ 'zh-cn' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );