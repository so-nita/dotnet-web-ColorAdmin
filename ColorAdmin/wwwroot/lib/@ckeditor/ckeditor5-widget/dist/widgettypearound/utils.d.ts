/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import type { DocumentSelection, DomConverter, Element, Schema, Selection, ViewElement } from '@ckeditor/ckeditor5-engine';
/**
 * The name of the type around model selection attribute responsible for
 * displaying a fake caret next to a selected widget.
 */
export declare const TYPE_AROUND_SELECTION_ATTRIBUTE = "widget-type-around";
/**
 * Checks if an element is a widget that qualifies to get the widget type around UI.
 */
export declare function isTypeAroundWidget(viewElement: ViewElement | undefined, modelElement: Element, schema: Schema): boolean;
/**
 * For the passed HTML element, this helper finds the closest widget type around button ancestor.
 */
export declare function getClosestTypeAroundDomButton(domElement: HTMLElement): HTMLElement | null;
/**
 * For the passed widget type around button element, this helper determines at which position
 * the paragraph would be inserted into the content if, for instance, the button was
 * clicked by the user.
 *
 * @returns The position of the button.
 */
export declare function getTypeAroundButtonPosition(domElement: HTMLElement): 'before' | 'after';
/**
 * For the passed HTML element, this helper returns the closest view widget ancestor.
 */
export declare function getClosestWidgetViewElement(domElement: HTMLElement, domConverter: DomConverter): ViewElement;
/**
 * For the passed selection instance, it returns the position of the fake caret displayed next to a widget.
 *
 * **Note**: If the fake caret is not currently displayed, `null` is returned.
 *
 * @returns The position of the fake caret or `null` when none is present.
 */
export declare function getTypeAroundFakeCaretPosition(selection: Selection | DocumentSelection): 'before' | 'after' | null;
