Ext.data.JsonP.Ext_data_validations({"mixedInto":[],"xtypes":{},"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.data.validations</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/validations.html#Ext-data-validations' target='_blank'>validations.js</a></div></pre><div class='doc-contents'><p>This singleton contains a set of validation functions that can be used to validate any type of data. They are most\noften used in <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically set up and executed.</p>\n</div><div class='members'><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callOverridden' class='name expandable'>callOverridden</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<div class='deprecated'><p>This property has been <strong>deprecated</strong> </p><p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n</div></div></div></div><div id='property-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callParent' class='name expandable'>callParent</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> Ext.define('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n Ext.define('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> Ext.define('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> Ext.define('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> Ext.define('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n</div></div></div><div id='property-emailMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-emailMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-emailMessage' class='name not-expandable'>emailMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an email validation fails</p>\n</div><div class='long'><p>The default error message used when an email validation fails</p>\n</div></div></div><div id='property-emailRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-emailRe' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-emailRe' class='name not-expandable'>emailRe</a><span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a></span></div><div class='description'><div class='short'><p>The regular expression used to validate email addresses</p>\n</div><div class='long'><p>The regular expression used to validate email addresses</p>\n</div></div></div><div id='property-exclusionMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-exclusionMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-exclusionMessage' class='name not-expandable'>exclusionMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an exclusion validation fails.</p>\n</div><div class='long'><p>The default error message used when an exclusion validation fails.</p>\n</div></div></div><div id='property-formatMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-formatMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-formatMessage' class='name not-expandable'>formatMessage</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'><p>The default error message used when a format validation fails.</p>\n</div><div class='long'><p>The default error message used when a format validation fails.</p>\n</div></div></div><div id='property-inclusionMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-inclusionMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-inclusionMessage' class='name not-expandable'>inclusionMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an inclusion validation fails.</p>\n</div><div class='long'><p>The default error message used when an inclusion validation fails.</p>\n</div></div></div><div id='property-lengthMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-lengthMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-lengthMessage' class='name not-expandable'>lengthMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when a length validation fails.</p>\n</div><div class='long'><p>The default error message used when a length validation fails.</p>\n</div></div></div><div id='property-presenceMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-presenceMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-presenceMessage' class='name not-expandable'>presenceMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when a presence validation fails.</p>\n</div><div class='long'><p>The default error message used when a presence validation fails.</p>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-email' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-email' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-email' class='name expandable'>email</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> email</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that an email string is in the correct format ...</div><div class='long'><p>Validates that an email string is in the correct format</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>email</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The email address</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes validation</p>\n</div></li></ul></div></div></div><div id='method-exclusion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-exclusion' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-exclusion' class='name expandable'>exclusion</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present in the configured list. ...</div><div class='long'><p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value is not present in the list</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-format' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-format' class='name expandable'>format</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the given value passes validation against the configured matcher regex. ...</div><div class='long'><p>Returns true if the given value passes validation against the configured <code>matcher</code> regex.\nFor example:</p>\n\n<pre><code>validations: [{type: 'format', field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes the format validation</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-getInitialConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-inclusion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-inclusion' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-inclusion' class='name expandable'>inclusion</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present in the configured list. ...</div><div class='long'><p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'inclusion', field: 'gender', list: ['Male', 'Female']}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value is present in the list</p>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-length' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-length' class='name expandable'>length</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the given value is between the configured min and max values. ...</div><div class='long'><p>Returns true if the given value is between the configured min and max values.\nFor example:</p>\n\n<pre><code>validations: [{type: 'length', field: 'name', min: 2}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes validation</p>\n</div></li></ul></div></div></div><div id='method-presence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-presence' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-presence' class='name expandable'>presence</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present. ...</div><div class='long'><p>Validates that the given value is present.\nFor example:</p>\n\n<pre><code>validations: [{type: 'presence', field: 'age'}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if validation passed</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","allMixins":[],"meta":{"author":["Ed Spencer"]},"requires":[],"deprecated":null,"extends":"Ext.Base","inheritable":false,"static":false,"superclasses":["Ext.Base","Ext.data.validations"],"protected":false,"singleton":true,"code_type":"ext_define","alias":null,"members":{"property":[{"owner":"Ext.Base","tagname":"property","deprecated":{"doc":null,"tagname":"deprecated","text":"<p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n","version":null},"static":false,"protected":true,"template":null,"required":null,"name":"callOverridden","id":"property-callOverridden"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"callParent","id":"property-callParent"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"emailMessage","id":"property-emailMessage"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"emailRe","id":"property-emailRe"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"exclusionMessage","id":"property-exclusionMessage"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"formatMessage","id":"property-formatMessage"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"inclusionMessage","id":"property-inclusionMessage"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"lengthMessage","id":"property-lengthMessage"},{"owner":"Ext.data.validations","tagname":"property","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"presenceMessage","id":"property-presenceMessage"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"method":[{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"email","id":"method-email"},{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"exclusion","id":"method-exclusion"},{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"format","id":"method-format"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"getInitialConfig","id":"method-getInitialConfig"},{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"inclusion","id":"method-inclusion"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"initConfig","id":"method-initConfig"},{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"length","id":"method-length"},{"owner":"Ext.data.validations","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"presence","id":"method-presence"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"statics","id":"method-statics"}],"cfg":[],"event":[]},"statics":{"property":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[],"event":[]},"subclasses":[],"uses":[],"private":false,"name":"Ext.data.validations","mixins":[],"id":"class-Ext.data.validations","component":false,"alternateClassNames":[],"files":[{"href":"validations.html#Ext-data-validations","filename":"validations.js"}]});