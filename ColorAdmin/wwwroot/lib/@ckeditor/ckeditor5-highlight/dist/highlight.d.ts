/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module highlight/highlight
 */
import { Plugin } from 'ckeditor5/src/core.js';
import HighlightEditing from './highlightediting.js';
import HighlightUI from './highlightui.js';
/**
 * The highlight plugin.
 *
 * For a detailed overview, check the {@glink features/highlight Highlight feature} documentation.
 *
 * This is a "glue" plugin which loads the {@link module:highlight/highlightediting~HighlightEditing} and
 * {@link module:highlight/highlightui~HighlightUI} plugins.
 */
export default class Highlight extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires(): readonly [typeof HighlightEditing, typeof HighlightUI];
    /**
     * @inheritDoc
     */
    static get pluginName(): "Highlight";
}
