"use strict";(function(){Polymer({is:"og-popup-view",properties:{/**
      * This property enable the second screen display.
      *
      * @property clickAble
      */clickAble:{type:Boolean,value:false},/**
      * This property allow convering all the height of the window.
      *
      * @property coverHeight
      */coverHeight:{type:Boolean,value:false},/**
      * This property will render the component below its parent if enabled.
      *
      * @property stickToParent
      */stickToParent:{type:Boolean,value:false},/**
      * This property will render the component below its parent if enabled.
      *
      * @property disableDrawerSwipe
      */disableDrawerSwipe:{type:Boolean,defaultValue:false},/**
      * This property defines the background color, value is an HEX base
      *
      * @property backgroundColor
      */backgroundColor:{type:String,defaultValue:"#fff"},/**
      * This property allow configuring the size of the second screen, use css % or px
      *
      * @property fullScreenSize
      */fullScreenSize:{type:String,value:"80%"},/**
      * This property allow adding extra margin for the position of the mini view allowing precise control
      *
      * @property extraMargin
      */extraMargin:{type:Number,defaultValue:0,value:0},/**
      * This property will hide/show the back button when being in the second screen
      *
      * @property backButton
      */backButton:{type:Boolean,value:false},/**
      * This property check the state of screen, if false, it means the state is in first screen which is the default value.
      *
      * @property _secondScreen
      */_secondScreen:{type:Boolean,notify:true,value:false},/**
      * This property set the width from the parent width
      *
      * @property parentWidth
      */parentWidth:{type:Number,defaultValue:350,notify:true,observer:"_updateWidth",value:350}},attached:function attached(){var context=this;var contentContainer=document.getElementById("contentContainer");var closeBtn=document.querySelector(".close-btn");var drawerMainContainer=document.getElementById("drawer-main-container");var containerBox=context.parentNode.getBoundingClientRect();var containerSize=containerBox.top+containerBox.height+context.extraMargin;var containerWidth=context.parentWidth;if(containerWidth<350){containerWidth=350}contentContainer.style.marginTop=containerSize+"px";contentContainer.style.padding=0;if(!this.coverHeight){contentContainer.style.bottom="initial"}contentContainer.style.backgroundColor=context.backgroundColor;contentContainer.style.boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.5)";closeBtn.style.backgroundColor=context.backgroundColor;contentContainer.style.overflow="initial";this._updateView(containerWidth+"px");if(!this.stickToParent){contentContainer.style.marginTop=0;contentContainer.style.overflow="auto"}else{this._createListeners("scroll",function(){var scrollY=window.scrollY;if(scrollY>=containerSize){contentContainer.style.marginTop=0;contentContainer.style.overflow="auto";return}contentContainer.style.marginTop=containerSize-scrollY+"px";contentContainer.style.overflow="initial"})}this._createListeners("resize",function(){if(!context._secondScreen){context.resetStates()}else{context._extendDrawer()}})},/**
    * Create listeners
    *
    * @method _createListeners
    */_createListeners:function _createListeners(type,callback){window.addEventListener(type,callback,true)},/**
    * When clicking in the background, resets component states
    *
    * @method _isResetingFromBackground
    */_isResetingFromBackground:function _isResetingFromBackground(e){if(e.target.id==="scrim"){this.resetStates()}// drawer.close();
},/**
    * Method callback listener for the tap/click action if click-able is true.
    *
    * @method _extendDrawer
    */_extendDrawer:function _extendDrawer(){if(this.clickAble){var fullSize=this.fullScreenSize;if(window.innerWidth<720){fullSize="100%"}this._updateView(fullSize);this._secondScreen=true;// this.disableDrawerSwipe = true;
}},/**
    * View is update from its scale with for second screen on tap.
    *
    * @method _updateView
    */_updateView:function _updateView(){var scale=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.customStyle["--app-drawer-width"]=scale;this.updateStyles()},/**
    * Directly access drawer and close it and reset states of the component.
    *
    * @method closing
    */closing:function closing(){this.resetStates();drawer.close()},/**
    * Reset component states.
    *
    * @method resetStates
    */resetStates:function resetStates(){var containerWidth=window.innerWidth-this.parentNode.getBoundingClientRect().left;if(containerWidth<350){containerWidth=350}this._updateView(containerWidth+"px");this._secondScreen=false;// this.disableDrawerSwipe = false;
},/**
    * Method allowing getting back to first screen.
    *
    * @method backToSmall
    */backToSmall:function backToSmall(){this.resetStates()},/**
    * Method allowing getting back to first screen.
    *
    * @method _updateWidth
    */_updateWidth:function _updateWidth(newVal){if(newVal<350){this._updateView("350px")}},listeners:{"app-drawer-transitioned":"_drawerSlide"},/**
    * Callback listener to app-drawer-transitioned from app-drawer component will reset states
    *
    * @method _drawerSlide
    */_drawerSlide:function _drawerSlide(e){this.resetStates()}})})();
//# sourceMappingURL=og-popup-view.js.map
