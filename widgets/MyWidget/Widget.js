import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';
import SubWidget1 from './SubWidget1';
import SubWidget2 from './SubWidget2';

    //To create a widget, you need to derive from BaseWidget.
    export default declare([BaseWidget], {

        baseClass: 'MyWidget',
        // add additional properties here

        //methods to communication with app container:
        postCreate() {
            this.inherited(arguments);
            console.log('MyWidget::postCreate');

            var subWidget1 = new SubWidget1({});
            subWidget1.placeAt(this.subWidgetsWrapper, 'last');
            subWidget1.startup();

            var subWidget2 = new SubWidget2({});
            subWidget2.placeAt(this.subWidgetsWrapper, 'last');
            subWidget2.startup();
        }
        // startup() {
        //   this.inherited(arguments);
        //   console.log('MyWidget::startup');
        // },
        // onOpen() {
        //   console.log('MyWidget::onOpen');
        // },
        // onClose(){
        //   console.log('MyWidget::onClose');
        // },
        // onMinimize(){
        //   console.log('MyWidget::onMinimize');
        // },
        // onMaximize(){
        //   console.log('MyWidget::onMaximize');
        // },
        // onSignIn(credential){
        //   console.log('MyWidget::onSignIn', credential);
        // },
        // onSignOut(){
        //   console.log('MyWidget::onSignOut');
        // }
        // onPositionChange(){
        //   console.log('MyWidget::onPositionChange');
        // },
        // resize(){
        //   console.log('MyWidget::resize');
        // }
        //methods to communication between widgets:
    });
