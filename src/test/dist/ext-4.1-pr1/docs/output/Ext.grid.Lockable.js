Ext.data.JsonP.Ext_grid_Lockable({"mixedInto":[],"xtypes":{},"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.grid.Lockable</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.grid.LockingView' rel='Ext.grid.LockingView' class='docClass'>Ext.grid.LockingView</a></div><h4>Files</h4><div class='dependency'><a href='source/Lockable.html#Ext-grid-Lockable' target='_blank'>Lockable.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Lockable is a private mixin which injects lockable behavior into any\nTablePanel subclass such as GridPanel or TreePanel. TablePanel will\nautomatically inject the <a href=\"#!/api/Ext.grid.Lockable\" rel=\"Ext.grid.Lockable\" class=\"docClass\">Ext.grid.Lockable</a> mixin in when one of the\nthese conditions are met:</p>\n\n<ul>\n<li>The TablePanel has the lockable configuration set to true</li>\n<li>One of the columns in the TablePanel has locked set to true/false</li>\n</ul>\n\n\n<p>Each TablePanel subclass must register an alias. It should have an array\nof configurations to copy to the 2 separate tablepanel's that will be generated\nto note what configurations should be copied. These are named normalCfgCopy and\nlockedCfgCopy respectively.</p>\n\n<p>Columns which are locked must specify a fixed width. They do NOT support a\nflex width.</p>\n\n<p>Configurations which are specified in this class will be available on any grid or\ntree which is using the lockable functionality.</p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-lockedViewConfig' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-cfg-lockedViewConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-cfg-lockedViewConfig' class='name expandable'>lockedViewConfig</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>A view configuration to be applied to the\nlocked side of the grid. ...</div><div class='long'><p>A view configuration to be applied to the\nlocked side of the grid. Any conflicting configurations between lockedViewConfig\nand viewConfig will be overwritten by the lockedViewConfig.</p>\n</div></div></div><div id='cfg-normalViewConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-cfg-normalViewConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-cfg-normalViewConfig' class='name expandable'>normalViewConfig</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>A view configuration to be applied to the\nnormal/unlocked side of the grid. ...</div><div class='long'><p>A view configuration to be applied to the\nnormal/unlocked side of the grid. Any conflicting configurations between normalViewConfig\nand viewConfig will be overwritten by the normalViewConfig.</p>\n</div></div></div><div id='cfg-scrollDelta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-cfg-scrollDelta' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-cfg-scrollDelta' class='name expandable'>scrollDelta</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Number of pixels to scroll when scrolling the locked section with mousewheel. ...</div><div class='long'><p>Number of pixels to scroll when scrolling the locked section with mousewheel. Defaults to 40.</p>\n<p>Defaults to: <code>40</code></p></div></div></div><div id='cfg-subGridXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-cfg-subGridXType' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-cfg-subGridXType' class='name expandable'>subGridXType</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The xtype of the subgrid to specify. ...</div><div class='long'><p>The xtype of the subgrid to specify. If this is\nnot specified lockable will determine the subgrid xtype to create by the\nfollowing rule. Use the superclasses xtype if the superclass is NOT\ntablepanel, otherwise use the xtype itself.</p>\n</div></div></div><div id='cfg-syncRowHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-cfg-syncRowHeight' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-cfg-syncRowHeight' class='name expandable'>syncRowHeight</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Synchronize rowHeight between the normal and\nlocked grid view. ...</div><div class='long'><p>Synchronize rowHeight between the normal and\nlocked grid view. This is turned on by default. If your grid is guaranteed\nto have rows of all the same height, you should set this to false to\noptimize performance.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callOverridden' class='name expandable'>callOverridden</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<div class='deprecated'><p>This property has been <strong>deprecated</strong> </p><p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n</div></div></div></div><div id='property-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callParent' class='name expandable'>callParent</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> Ext.define('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n Ext.define('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> Ext.define('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> Ext.define('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> Ext.define('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><h3 class='members-title'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-getInitialConfig' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-getInitialConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-addMembers' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-addStatics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-create' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-createAlias' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> alias, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> origin</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-getName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-override' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code>Ext.define('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n<div class='deprecated'><p>This method has been <strong>deprecated</strong> since 4.1.0</p><p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n</div><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div></div></div><div id='m-event'><div class='definedBy'>Defined By</div><h3 class='members-title'>Events</h3><div class='subsection'><div id='event-lockcolumn' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-event-lockcolumn' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-event-lockcolumn' class='name expandable'>lockcolumn</a>( <span class='pre'><a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a> this, <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a> column, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> eOpts</span> )</div><div class='description'><div class='short'>Fires when a column is locked. ...</div><div class='long'><p>Fires when a column is locked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a><div class='sub-desc'><p>The gridpanel.</p>\n</div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a><div class='sub-desc'><p>The column being locked.</p>\n</div></li><li><span class='pre'>eOpts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The options object passed to <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-unlockcolumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.Lockable' rel='Ext.grid.Lockable' class='definedIn docClass'>Ext.grid.Lockable</a><br/><a href='source/Lockable.html#Ext-grid-Lockable-event-unlockcolumn' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.grid.Lockable-event-unlockcolumn' class='name expandable'>unlockcolumn</a>( <span class='pre'><a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a> this, <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a> column, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> eOpts</span> )</div><div class='description'><div class='short'>Fires when a column is unlocked. ...</div><div class='long'><p>Fires when a column is unlocked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a><div class='sub-desc'><p>The gridpanel.</p>\n</div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a><div class='sub-desc'><p>The column being unlocked.</p>\n</div></li><li><span class='pre'>eOpts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The options object passed to <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","allMixins":[],"meta":{},"requires":["Ext.grid.LockingView"],"deprecated":null,"extends":"Ext.Base","inheritable":false,"static":false,"superclasses":["Ext.Base","Ext.grid.Lockable"],"protected":false,"singleton":false,"code_type":"ext_define","alias":null,"members":{"property":[{"owner":"Ext.Base","tagname":"property","deprecated":{"doc":null,"tagname":"deprecated","text":"<p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n","version":null},"static":false,"protected":true,"template":null,"required":null,"name":"callOverridden","id":"property-callOverridden"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"callParent","id":"property-callParent"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"method":[{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"getInitialConfig","id":"method-getInitialConfig"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"initConfig","id":"method-initConfig"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"statics","id":"method-statics"}],"cfg":[{"owner":"Ext.grid.Lockable","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"lockedViewConfig","id":"cfg-lockedViewConfig"},{"owner":"Ext.grid.Lockable","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"normalViewConfig","id":"cfg-normalViewConfig"},{"owner":"Ext.grid.Lockable","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"scrollDelta","id":"cfg-scrollDelta"},{"owner":"Ext.grid.Lockable","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"subGridXType","id":"cfg-subGridXType"},{"owner":"Ext.grid.Lockable","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"syncRowHeight","id":"cfg-syncRowHeight"}],"event":[{"owner":"Ext.grid.Lockable","tagname":"event","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"lockcolumn","id":"event-lockcolumn"},{"owner":"Ext.grid.Lockable","tagname":"event","deprecated":null,"static":false,"protected":false,"template":null,"required":null,"name":"unlockcolumn","id":"event-unlockcolumn"}]},"statics":{"property":[],"css_var":[],"method":[{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"addMembers","id":"static-method-addMembers"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"addStatics","id":"static-method-addStatics"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"create","id":"static-method-create"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"createAlias","id":"static-method-createAlias"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"getName","id":"static-method-getName"},{"owner":"Ext.Base","tagname":"method","deprecated":{"doc":null,"tagname":"deprecated","text":"<p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n","version":"4.1.0"},"static":true,"protected":false,"template":false,"required":null,"name":"override","id":"static-method-override"}],"css_mixin":[],"cfg":[],"event":[]},"subclasses":[],"uses":[],"private":true,"name":"Ext.grid.Lockable","mixins":[],"id":"class-Ext.grid.Lockable","component":false,"alternateClassNames":[],"files":[{"href":"Lockable.html#Ext-grid-Lockable","filename":"Lockable.js"}]});