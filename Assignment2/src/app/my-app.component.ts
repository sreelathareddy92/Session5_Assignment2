/**
 * added bootstrap and jQuery to project using
 *    ' $ npm install bootstrap@3 jquery --save '
 * 
 * 
 */
import { Component } from '@angular/core';


@Component({

    selector : 'my-app-component',
    template : ` BootStrap applied
    <button type="button" class="btn btn-primary">Primary</button>
    <input class="form-control input-lg" id="inputlg" type="text">
    `  
})

// @class RootComponent
class RootComponent {}

export { RootComponent }