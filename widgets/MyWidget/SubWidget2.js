import declare from 'dojo/_base/declare';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import _WidgetBase from 'dijit/_WidgetBase';
import template from 'dojo/text!./SubWidget2/templates/SubWidget2.html';
import stylesheet from 'xstyle/css!./SubWidget2/css/SubWidget2.css';

export default declare([_WidgetBase, _TemplatedMixin], {

    baseClass: 'SubWidget2',
    templateString: template,

    constructor() {
        this.inherited(arguments);
        console.log('SubWidget2::constructor');
    }
});
