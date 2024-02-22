(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['input.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"labelClass") || (depth0 != null ? lookupProperty(depth0,"labelClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":45}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"labelFor") || (depth0 != null ? lookupProperty(depth0,"labelFor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelFor","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":64}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"labelText") || (depth0 != null ? lookupProperty(depth0,"labelText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelText","hash":{},"data":data,"loc":{"start":{"line":2,"column":66},"end":{"line":2,"column":79}}}) : helper)))
    + "</label>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputError") || (depth0 != null ? lookupProperty(depth0,"inputError") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputError","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"errorText") || (depth0 != null ? lookupProperty(depth0,"errorText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorText","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":58}}}) : helper)))
    + "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputContainerClass") || (depth0 != null ? lookupProperty(depth0,"inputContainerClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputContainerClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":35}}}) : helper)))
    + "\">\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"label") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":94}}})) != null ? stack1 : "")
    + "\n    <input class=\"input "
    + alias4(((helper = (helper = lookupProperty(helpers,"inputClass") || (depth0 != null ? lookupProperty(depth0,"inputClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":24},"end":{"line":3,"column":38}}}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputType") || (depth0 != null ? lookupProperty(depth0,"inputType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputType","hash":{},"data":data,"loc":{"start":{"line":3,"column":46},"end":{"line":3,"column":59}}}) : helper)))
    + "\" autocomplete=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"autocomplete") || (depth0 != null ? lookupProperty(depth0,"autocomplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"autocomplete","hash":{},"data":data,"loc":{"start":{"line":3,"column":75},"end":{"line":3,"column":91}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputName") || (depth0 != null ? lookupProperty(depth0,"inputName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputName","hash":{},"data":data,"loc":{"start":{"line":3,"column":99},"end":{"line":3,"column":112}}}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputPlaceholder") || (depth0 != null ? lookupProperty(depth0,"inputPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputPlaceholder","hash":{},"data":data,"loc":{"start":{"line":3,"column":127},"end":{"line":3,"column":147}}}) : helper)))
    + "\"> \n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"error") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":71}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
})();
