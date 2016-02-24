define([
  'dijit/_TemplatedMixin',
  'dijit/_WidgetBase',

  'dojo/_base/declare',
  'dojo/text!./SubWidget1/templates/SubWidget1.html',

  'xstyle/css!./SubWidget1/css/SubWidget1.css'
], function(
  _TemplatedMixin, _WidgetBase,
  declare, template,
  stylesheet
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    baseClass: 'SubWidget1',
    templateString: template,

    // Widget LifeCycle
    constructor: function() {
      console.log('subWidget1::constructor');
    }
  });
});
