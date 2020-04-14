/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonBlockEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar.js';

export default class Editor extends BalloonBlockEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	Bold,
	Italic,
	Heading,
	Link,
	List,
	Table,
	TableToolbar,
	Alignment,
	Autosave,
	TodoList,
	Underline,
	Essentials,
	Paragraph,
	BlockToolbar
];

Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'link'
		]
	},
	language: 'en',
	blockToolbar: [
		'heading',
		'numberedList',
		'bulletedList',
		'todoList',
		'alignment',
		'insertTable',
		'undo',
		'redo'
	],
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	}
};

