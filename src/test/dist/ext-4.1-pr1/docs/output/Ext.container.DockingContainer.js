Ext.data.JsonP.Ext_container_DockingContainer({"mixedInto":["Ext.panel.AbstractPanel"],"xtypes":{},"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.container.DockingContainer</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.util.MixedCollection' rel='Ext.util.MixedCollection' class='docClass'>Ext.util.MixedCollection</a></div><div class='dependency'><a href='#!/api/Ext.Element' rel='Ext.Element' class='docClass'>Ext.Element</a></div><h4>Files</h4><div class='dependency'><a href='source/DockingContainer.html#Ext-container-DockingContainer' target='_blank'>DockingContainer.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-defaultDockWeights' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-cfg-defaultDockWeights' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-cfg-defaultDockWeights' class='name expandable'>defaultDockWeights</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>This object holds the default weights applied to dockedItems that have no weight. ...</div><div class='long'><p>This object holds the default weights applied to dockedItems that have no weight. These start with a\nweight of 1, to allow negative weights to insert before top items and are odd numbers\nso that even weights can be used to get between different dock orders.</p>\n\n<p>To make default docking order match border layout, do this:</p>\n\n<pre><code> Ext.panel.AbstractPanel.prototype.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };\n</code></pre>\n\n<p>Changing these defaults as above or individually on this object will effect all Panels.\nTo change the defaults on a single panel, you should replace the entire object:</p>\n\n<pre><code> initComponent: function () {\n     // NOTE: Don't change members of defaultDockWeights since the object is shared.\n     this.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };\n\n     this.callParent();\n }\n</code></pre>\n\n<p>To change only one of the default values, you do this:</p>\n\n<pre><code> initComponent: function () {\n     // NOTE: Don't change members of defaultDockWeights since the object is shared.\n     this.defaultDockWeights = Ext.applyIf({ top: 10 }, this.defaultDockWeights);\n\n     this.callParent();\n }\n</code></pre>\n<p>Defaults to: <code>{top: {render: 1, visual: 1}, left: {render: 3, visual: 5}, right: {render: 5, visual: 7}, bottom: {render: 7, visual: 3}}</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callOverridden' class='name expandable'>callOverridden</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<div class='deprecated'><p>This property has been <strong>deprecated</strong> </p><p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n</div></div></div></div><div id='property-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-callParent' class='name expandable'>callParent</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> Ext.define('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n Ext.define('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> Ext.define('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> Ext.define('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> Ext.define('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><h3 class='members-title'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-addDocked' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-method-addDocked' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-method-addDocked' class='name expandable'>addDocked</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[] component, [<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> pos]</span> )</div><div class='description'><div class='short'>Adds docked item(s) to the container. ...</div><div class='long'><p>Adds docked item(s) to the container.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<div class='sub-desc'><p>The Component or array of components to add. The components\nmust include a 'dock' parameter on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n</div></li><li><span class='pre'>pos</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The index at which the Component will be added</p>\n</div></li></ul></div></div></div><div id='method-getDockedComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-method-getDockedComponent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-method-getDockedComponent' class='name expandable'>getDockedComponent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> comp</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></div><div class='description'><div class='short'>Finds a docked component by id, itemId or position. ...</div><div class='long'><p>Finds a docked component by id, itemId or position. Also see <a href=\"#!/api/Ext.container.DockingContainer-method-getDockedItems\" rel=\"Ext.container.DockingContainer-method-getDockedItems\" class=\"docClass\">getDockedItems</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The id, itemId or position of the docked component (see getComponent for details)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span><div class='sub-desc'><p>The docked component (if found)</p>\n</div></li></ul></div></div></div><div id='method-getDockedItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-method-getDockedItems' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-method-getDockedItems' class='name expandable'>getDockedItems</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> selector, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> beforeBody</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>[]</div><div class='description'><div class='short'>Retrieve an array of all currently docked Components. ...</div><div class='long'><p>Retrieve an array of all currently docked Components.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A <a href=\"#!/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector string to filter the returned items.</p>\n</div></li><li><span class='pre'>beforeBody</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>An optional flag to limit the set of items to only those\n before the body (true) or after the body (false). All components are returned by\n default.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>[]</span><div class='sub-desc'><p>The array of docked components meeting the specified criteria.</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-getInitialConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-insertDocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-method-insertDocked' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-method-insertDocked' class='name expandable'>insertDocked</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> pos, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[] component</span> )</div><div class='description'><div class='short'>Inserts docked item(s) to the panel at the indicated position. ...</div><div class='long'><p>Inserts docked item(s) to the panel at the indicated position.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pos</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index at which the Component will be inserted</p>\n</div></li><li><span class='pre'>component</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<div class='sub-desc'><p>. The Component or array of components to add. The components\nmust include a 'dock' paramater on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n</div></li></ul></div></div></div><div id='method-removeDocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.container.DockingContainer' rel='Ext.container.DockingContainer' class='definedIn docClass'>Ext.container.DockingContainer</a><br/><a href='source/DockingContainer.html#Ext-container-DockingContainer-method-removeDocked' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.container.DockingContainer-method-removeDocked' class='name expandable'>removeDocked</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> item, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> autoDestroy]</span> )</div><div class='description'><div class='short'>Removes the docked item from the panel. ...</div><div class='long'><p>Removes the docked item from the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>. The Component to remove.</p>\n</div></li><li><span class='pre'>autoDestroy</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Destroy the component after removal.</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-addMembers' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-addStatics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-create' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-createAlias' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> alias, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> origin</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-getName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-static-method-override' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static-signature'>static</strong><strong class='deprecated-signature'>deprecated</strong></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code>Ext.define('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n<div class='deprecated'><p>This method has been <strong>deprecated</strong> since 4.1.0</p><p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n</div><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div></div></div></div></div>","allMixins":[],"meta":{},"requires":["Ext.util.MixedCollection","Ext.Element"],"deprecated":null,"extends":"Ext.Base","inheritable":false,"static":false,"superclasses":["Ext.Base","Ext.container.DockingContainer"],"protected":false,"singleton":false,"code_type":"ext_define","alias":null,"members":{"property":[{"owner":"Ext.Base","tagname":"property","deprecated":{"doc":null,"tagname":"deprecated","text":"<p>as of 4.1. Use <a href=\"#!/api/Ext.Base-property-callParent\" rel=\"Ext.Base-property-callParent\" class=\"docClass\">callParent</a> instead.</p>\n","version":null},"static":false,"protected":true,"template":null,"required":null,"name":"callOverridden","id":"property-callOverridden"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"callParent","id":"property-callParent"},{"owner":"Ext.Base","tagname":"property","deprecated":null,"static":false,"protected":true,"template":null,"required":null,"name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"method":[{"owner":"Ext.container.DockingContainer","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"addDocked","id":"method-addDocked"},{"owner":"Ext.container.DockingContainer","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"getDockedComponent","id":"method-getDockedComponent"},{"owner":"Ext.container.DockingContainer","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"getDockedItems","id":"method-getDockedItems"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"getInitialConfig","id":"method-getInitialConfig"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"initConfig","id":"method-initConfig"},{"owner":"Ext.container.DockingContainer","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"insertDocked","id":"method-insertDocked"},{"owner":"Ext.container.DockingContainer","tagname":"method","deprecated":null,"static":false,"protected":false,"template":false,"required":null,"name":"removeDocked","id":"method-removeDocked"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":false,"protected":true,"template":false,"required":null,"name":"statics","id":"method-statics"}],"cfg":[{"owner":"Ext.container.DockingContainer","tagname":"cfg","deprecated":null,"static":false,"protected":false,"template":null,"required":false,"name":"defaultDockWeights","id":"cfg-defaultDockWeights"}],"event":[]},"statics":{"property":[],"css_var":[],"method":[{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"addMembers","id":"static-method-addMembers"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"addStatics","id":"static-method-addStatics"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"create","id":"static-method-create"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"createAlias","id":"static-method-createAlias"},{"owner":"Ext.Base","tagname":"method","deprecated":null,"static":true,"protected":false,"template":false,"required":null,"name":"getName","id":"static-method-getName"},{"owner":"Ext.Base","tagname":"method","deprecated":{"doc":null,"tagname":"deprecated","text":"<p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n","version":"4.1.0"},"static":true,"protected":false,"template":false,"required":null,"name":"override","id":"static-method-override"}],"css_mixin":[],"cfg":[],"event":[]},"subclasses":[],"uses":[],"private":false,"name":"Ext.container.DockingContainer","mixins":[],"id":"class-Ext.container.DockingContainer","component":false,"alternateClassNames":[],"files":[{"href":"DockingContainer.html#Ext-container-DockingContainer","filename":"DockingContainer.js"}]});