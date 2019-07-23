var index_id = 0;//动态生成id的值
var page = {
    tab: function () {
        var tab = $('.tab > div');
        var tab_contain = $('.tab_contain > div');
        var i = 0;
        for (i = 0; i < tab.length; i++) {
            tab[i].index = i;
            tab[i].onclick = function () {
                for (i = 0; i < tab.length; i++) {
                    tab[i].className = '';
                    tab_contain[i].className = 'hide ';
                }
                tab[this.index].className = 'active';
                tab_contain[this.index].className = '';
            }
        }
    },
    createLabel:function(){
        new page.NewLabel('Text Box');
        new page.NewLabel('Option');
        new page.NewLabel('Check Box');
        new page.NewLabel('Radio');
        new page.NewLabel('Date');
        new page.NewLabel('Time');
        new page.NewLabel('TextArea');
        new page.NewLabel('Pills');
        new page.NewLabel('Button');
        new page.NewLabel('Header');
        new page.NewLabel('Lookup');
        new page.NewLabel('Paragraph');
        new page.NewLabel('Panel');
        new page.NewLabel('Tab');
        new page.NewLabel('Collapse');
    },
    onDrop: function (event) {
        var target = $(event.target);
        var range = event.target.className == 'wrapList' || event.target.className == 'panel_main' || event.target.className == 'tab-pane active' || event.target.className == 'accordion-inner';
        if (this.dom.innerText == 'Text Box') {
            if (range) {
                page.new.newTextBox(target);
            }
        }
        if (this.dom.innerText == 'Option') {
            if (range) {
                page.new.newOption(target);
            }
        }
        if (this.dom.innerText == 'Check Box') {
            if (range) {
                page.new.newCheckBox(target);
            }
        }
        if (this.dom.innerText == 'Radio') {
            if (range) {
                page.new.newRadio(target);
            }
        }
        if (this.dom.innerText == 'Date') {
            if (range) {
                page.new.newDate(target);
            }
        }
        if (this.dom.innerText == 'Time') {
            if (range) {
                page.new.newTime(target);
            }
        }
        if (this.dom.innerText == 'TextArea') {
            if (range) {
                page.new.newTextArea(target);
            }
        }
        if (this.dom.innerText == 'Pills') {
            if (range) {
                page.new.newPills(target);
            }
        }
        if (this.dom.innerText == 'Button') {
            if (range) {
                page.new.newButton(target);
            }
        }
        if (this.dom.innerText == 'Header') {
            if (range) {
                page.new.newHeader(target);
            }
        }
        if (this.dom.innerText == 'Lookup') {
            if (range) {
                page.new.newLookup(target);
            }
        }
        if (this.dom.innerText == 'Paragraph') {
            if (range) {
                page.new.newParagraph(target);
            }
        }
        if (this.dom.innerText == 'Panel') {
            if (range) {
                page.new.newPanel(target);
            }
        }
        if (this.dom.innerText == 'Tab') {
            if (range) {
                page.new.newTab(target);
            }
        }
        if (this.dom.innerText == 'Collapse') {
            if (range) {
                page.new.newCollapse(target);
            }
        }
    },
    NewLabel:function (label) {
        var controls = $('.tab_contain>div>form');
        var template = $('.tab_contain>div>#template');
        this.dom = document.createElement('div');
        this.dom.innerText = label;
        controls.append(this.dom);
        if (label == 'Panel' || label == 'Tab' || label == 'Collapse') {
            template.append(this.dom);
        }
        this.dom.setAttribute("draggable", true);
        // drop：拖拽对象投放在投放区时触发
        document.ondrop = page.onDrop;
        // dragstart：按下鼠标键并开始移动时触
        document.ondragstart = function (event) {
            this.dom = event.target;
            // 使其半透明
            event.target.style.opacity = 0.3;
        }
        // drag：在元素拖拽过程中持续触发----相似与mousemove
        document.ondrag = function (event) {
        }
        // dragend：元素拖拽停止时触发
        document.ondragend = function (event) {
            event.target.style.opacity = "";
        }
        // dragenter：当拖拽对象进入投放区时触发
        document.ondragenter = function (event) {
            event.preventDefault();
            if (event.target.className == 'wrapList') {
                event.target.style.boxShadow = '0 0 5px 0 #000';
            }
        }
        // dragover ：拖拽对象在投放区内移动时持续触发
        document.ondragover = function (event) {
            event.preventDefault();
        }
        // dragleave：元素被拖出了投放区时触发
        document.ondragleave = function (event) {
            event.preventDefault();
            event.target.style.boxShadow = '';
        }
    },
    property: {
        property_TextBox_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $_input = $elem.find("input");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var property_input = $('<input placeholder="default value"></input>');
            var property_placeholder = $('<input placeholder="placeholder"></input>');
            var property_label = $('<input placeholder="label"></input>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            property_contain.append(property_title, property_input, property_placeholder, property_label, property_hover, align_text, property_name, property_id);
            // methods  // add || del => update => contact => change
            page.change.change_text(property_title, $_label);
            page.change.change_value(property_input, $_input);
            page.change.change_placeholder(property_placeholder, $_input);
            page.change.change_name(property_name, $_input);
            page.change.change_id(property_id, $_input);
            page.change.change_hover(property_hover, $elem);
            page.add.add_label(property_label, $_div);
            page.public.text_align(align_text, $_label);
            // 
            property_container.append(property_contain);
        },
        property_option_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // left
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $_input = $elem.find("select");
            var $id = $elem.attr('id');

            // right
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var property_aside = $('<div class="property_aside"></div>');
            var property_topic = $('<label>options:</label>');
            var property_add = $('<img class="property_add" src="./image/add.png">');
            var property_del = $('<img class="property_del" src="./image/del.png">');
            var property_options = $('<div class="option_list"></div>');
            var property_label = $('<input placeholder="label"></input>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var align_text = $('<select><option class="align_left" value="1">left</option><option value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            //methods
            page.change.change_text(property_title, $_label);
            page.change.change_hover(property_hover, $elem);
            page.change.change_id(property_id, $_input);
            page.change.change_name(property_name, $_input);
            page.contact.contact_option($id, property_options);
            page.add.add_label(property_label, $_div);
            page.add.add_option(property_add, $id, property_options);
            page.del.del_option(property_del, $id, property_options);
            page.public.text_align(align_text, $_label);
            // 
            property_aside.append(property_topic, property_add, property_del);
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id, property_aside, property_options);
            property_container.append(property_contain);
        },
        property_check_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // left
            var $_label = $elem.children("label");
            var $id = $elem.attr('id');
            var $_div = $elem.children('div');
            // right
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var property_label = $('<input placeholder="label"></input>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_aside = $('<div class="property_aside"></div>')
            var property_topic = $('<label>options:</label>');
            var property_add = $('<img class="property_add" src="./image/add.png">');
            var property_del = $('<img class="property_del" src="./image/del.png">');
            var property_options = $('<div class="option_list"></div>');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            // methods
            page.change.change_text(property_title, $_label);
            page.change.change_hover(property_hover, $elem);
            page.change.change_id(property_id, $_div);
            page.change.change_name(property_name, $_div);
            page.contact.contact_check($id, property_options);
            page.add.add_label(property_label, $_div);
            page.add.add_check(property_add, $id, property_options);
            page.del.del_check(property_del, $id, property_options);
            page.public.text_align(align_text, $_label);
            // 
            property_aside.append(property_topic, property_add, property_del);
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id, property_aside, property_options);
            property_container.append(property_contain);
        },
        property_radio_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // left
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $id = $elem.attr('id');

            // right
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var property_label = $('<input placeholder="label"></input>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_aside = $('<div class="property_aside"></div>');
            var property_topic = $('<label>options:</label>');
            var property_add = $('<img class="property_add" src="./image/add.png">');
            var property_del = $('<img class="property_del" src="./image/del.png">');
            var property_options = $('<div class="option_list"></div>');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            //  methods
            page.change.change_text(property_title, $_label);
            page.change.change_hover(property_hover, $elem);
            page.change.change_id(property_id, $_div);
            page.change.change_name(property_name, $_div);
            page.contact.contact_radio($id, property_options);
            page.add.add_radio(property_add, $id, property_options);
            page.add.add_label(property_label, $_div);
            page.del.del_radio(property_del, $id, property_options);
            page.public.text_align(align_text, $_label);
            // 
            property_aside.append(property_topic, property_add, property_del);
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id, property_aside, property_options);
            property_container.append(property_contain);

        },
        property_Date_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $_input = $elem.find("input");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_label = $('<input placeholder="label"></input>');
            // methods
            page.change.change_text(property_title, $_label);
            page.change.change_hover(property_hover, $elem);
            page.change.change_name(property_name, $_input);
            page.change.change_id(property_id, $_input);
            page.add.add_label(property_label, $_div);
            page.public.text_align(align_text, $_label);
            // 
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id);
            property_container.append(property_contain);
        },
        property_Time_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $_input = $elem.find("input");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_label = $('<input placeholder="label"></input>');
            // methods
             page.change.change_text(property_title, $_label);
             page.change.change_hover(property_hover, $elem);
             page.change.change_name(property_name, $_input);
             page.change.change_id(property_id, $_input);
             page.add.add_label(property_label, $_div);
             page.public.text_align(align_text, $_label);
            // 
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id);
            property_container.append(property_contain);
        },
        property_TextArea_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $textarea = $elem.find("textarea");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_input = $('<input placeholder="default value"></input>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_label = $('<input placeholder="label"></input>');
            // methods
            page.change.change_text(property_title, $_label);
            page.change.change_text(property_input, $textarea);
            page.change.change_hover(property_hover, $elem);
            page.change.change_name(property_name, $textarea);
            page.change.change_id(property_id, $textarea);
            page.add.add_label(property_label, $_div);
            page.change.text_align(align_text, $_label);
            // 
            property_contain.append(property_title, align_text, property_label, property_hover, property_name, property_id);
            property_container.append(property_contain);
        },
        //
        property_Pills_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // left
            var $_div = $elem.children('div');
            var $id = $elem.attr('id');
            // right
            var property_contain = $('<div class="property_contain"></div>');
            var stacked = $('<div class="btn btn-default">Stacked</div>');
            var property_label = $('<input placeholder="label"></input>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_name = $('<input placeholder="name"></input>');
            var property_id = $('<input placeholder="ID"></input>');
            var property_aside = $('<div class="property_aside"></div>')
            var property_topic = $('<label>Pills:</label>');
            var property_add = $('<img class="property_add" src="./image/add.png">');
            var property_del = $('<img class="property_del" src="./image/del.png">');
            var property_options = $('<div class="option_list"></div>');
            var divClass = $_div.attr('class') == 'nav nav-pills nav-stacked';
            // methods
            page.change.change_hover(property_hover, $elem);
            page.change.change_id(property_id, $_div);
            page.change.change_name(property_name, $_div);
            page.contact.contact_pills($id, property_options);
            page.add.add_label(property_label, $_div);
            page.add.add_pills(property_add, $id, property_options);
            page.del.del_pills(property_del, $id, property_options);
            page.public.Btn_mode(stacked, divClass);
            page.public.pills_stacked(stacked, $_div);
            // 
            property_aside.append(property_topic, property_add, property_del)
            property_contain.append(stacked, property_label, property_hover, property_name, property_id, property_aside, property_options);
            property_container.append(property_contain);
        },
        property_button_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $button = $elem.find("button");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var button_properties = $('<div class="button_properties"></div>');
            var inline = $('<div class="btn btn-default">inline</div>');
            var property_size = $('<select><option value="1">Default</option><option value="2">Large</option><option value="3">Small</option><option value="4">Extra Small</option></select>');
            var property_title = $('<input value="" type="text"  placeholder="default">');
            var property_name = $('<input value="" type="text"  placeholder="name">');
            var property_id = $('<input value="" type="text"  placeholder="ID">');
            var property_style = $('<select><option value="1">Default</option><option value="2">Primary</option><option value="3">Success</option><option value="4">Info</option><option value="5">Warning</option><option value="6">Danger</option><option value="7">Link</option></select>');
            var divClass = $elem.attr('class') == 'form_btn';
            // methods
            page.change.change_text(property_title, $button);
            page.change.change_name(property_id, $button);
            page.change.change_id(property_id, $button);
            page.public.btn_style(property_style, $button);
            page.public.Btn_mode(inline, divClass);
            page.public.btn_inline(inline, $button);
            page.public.btn_size(property_size, $button);
            // 
            button_properties.append(inline);
            property_contain.append(button_properties, property_size, property_title, property_style, property_name, property_id);
            property_container.append(property_contain);
        },
        property_header_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $div = $elem.children('div');
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input  value="" type="text"  placeholder="default" />');
            var property_label = $('<input  value="" type="text"  placeholder="label" />');
            var property_aside = $('<div class="property_aside">Header Size</div>');
            var property_size = $('<select><option value="1">Header  h1</option><option value="2">Header  h2</option><option value="3">Header  h3</option><option value="4">Header  h4</option><option value="5">Header  h5</option></select>');
            //  methods
            page.change.change_header(property_title, $div);
            page.add.add_label(property_label, $div);
            page.public.header_size(property_size, $div);
            //  
            property_contain.append(property_title, property_label, property_aside, property_size);
            property_container.append(property_contain);
        },
        property_lookup_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("label");
            var $_div = $elem.children("div");
            var $_input = $elem.find("input");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_title = $('<input value="" type="text"  placeholder="title">');
            var property_placeholder = $('<input placeholder="placeholder"></input>');
            var property_input = $('<input placeholder="default value"></input>');
            var property_id = $('<input value="" type="text"  placeholder="ID">');
            var property_name = $('<input value="" type="text"  placeholder="name">');
            var align_text = $('<select><option class="align_left" value="1">left</option><option  value="2">center</option><option  value="3">right</option><option  value="4">top</option></select>');
            var property_hover = $('<input placeholder="hover"></input>');
            var property_label = $('<input placeholder="label"></input>');
            // methods
            page.change.change_text(property_title, $_label);
            page.change.change_placeholder(property_input, $_input);
            page.change.change_id(property_id, $_input);
            page.change.change_name(property_id, $_input);
            page.change.change_placeholder(property_placeholder, $_input);
            page.change.change_hover(property_hover, $elem);
            page.add.add_label(property_label, $_div);
            page.public.text_align(align_text, $_label);
            // 
            property_contain.append(property_title, property_placeholder, align_text, property_hover, property_label, property_name, property_id);
            property_container.append(property_contain);
        },
        property_paragraph_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_label = $elem.children("p");
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_text = $('<textarea  placeholder="textarea"></textarea>');
            var property_id = $('<input value="" type="text"  placeholder="ID">');
            var property_name = $('<input value="" type="text"  placeholder="name">');
            // methods
            page.change.change_text(property_text, $_label);
            page.change.change_id(property_id, $_label);
            page.change.change_name(property_id, $_label);
            // 
            property_contain.append(property_text, property_id, property_name);
            property_container.append(property_contain);
        },
        property_Panel_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_header = $elem.children('.panel_head');
                var $elem =$elem;
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_header_title = $('<div class="property_aside">Header</div>');
            var property_header = $('<input></input>');
            var property_footer_title = $('<div class="property_aside">Footer</div>');
            var property_footer = $('<input></input>');
            // methods
            page.change.change_text(property_header, $_header);
            page.change.change_panelFooter(property_footer,$elem);
            // 
            property_contain.append(property_header_title,property_header,property_footer_title,property_footer);
            property_container.append(property_contain);
        },
        property_Tab_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $id = $elem.attr('id');
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_aside = $('<div class="property_aside"></div>');
            var property_topic = $('<label>options:</label>');
            var property_add = $('<img class="property_add" src="./image/add.png">');
            var property_del = $('<img class="property_del" src="./image/del.png">');
            var property_options = $('<div class="option_list"></div>');
            // methods
             page.contact.contact_tab($id, property_options);
             page.add.add_tab(property_add, $id, property_options);
             page.del.del_tab(property_del, $id, property_options);
            //  
            property_aside.append(property_topic, property_add, property_del);
            property_contain.append(property_aside, property_options);
            property_container.append(property_contain);
        },
        property_Collapse_show: function ($elem) {
            var property_container = $('.property_container');
            property_container.empty();
            // right
            var $_a = $elem.prev();
            // left
            var property_contain = $('<div class="property_contain"></div>');
            var property_head = $('<input></input>');
            // methods
            page.change.change_text(property_head, $_a);
            // 
            property_contain.append(property_head)
            property_container.append(property_contain);
        }
    },
    new: {
        newTextBox: function (target) {
            var $_div = $('<div data-trigger="hover" data-toggle="popover" data-placement="left" class="form_list"></div>');
            var $_name = $('<label>Untitled</label>');
            var $_text = $('<div class="controls"><input type="text"></div>');
            $_div.on('click', function () {
                page.property.property_TextBox_show($(this));
            });
            $_div.append($_name, $_text);
            target.append($_div);
        },
        newOption: function (target) {
            var $_div = $('<div  data-trigger="hover" data-toggle="popover" data-placement="left" class="form_list"></div>');
            var $_name = $('<label>Select</label>');
            var $select = $('<div class="col_w_80"><select  class="form_options"><option></option><option value="option1">option1</option><option value="option2">option2</option></select></div>');
            $_div.attr('id', 'option' + '_' + index_id++);
            $_div.on("click", function () {
                var $this = $(this);
                page.property.property_option_show($this);
            });
            $_div.append($_name, $select);
            target.append($_div);
        },
        newCheckBox: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>select all that Apply</label>');
            var $select = $('<div class="select_contain"><label>option1<input type="checkbox"></label><label>option2<input type="checkbox"></label><label>option3<input type="checkbox"></label></div>');
            $_div.attr('id', 'check' + '_box_' + index_id++);
            $_div.on("click", function () {
                var $this = $(this);
                page.property.property_check_show($this);
            });
            $_div.append($_name, $select);
            target.append($_div);
        },
        newRadio: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>select a Choice</label>');
            var $select = $('<div class="select_contain"></div>');
            $_div.attr('id', 'radio' + '_' + index_id++);
            var $radio = $('<label>option1<input type="radio"></label><label>option2<input type="radio"></label><label>option3<input type="radio"></label>');
            $_div.on("click", function () {
                var $this = $(this);
                page.property.property_radio_show($this);
            });
            $select.append($radio)
            $_div.append($_name, $select);
            target.append($_div);
        },
        newDate: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>Date</label>');
            var $select = $('<div class="form-group col_w_80"><div class="input-group date"><input type="text" class="form-control pull-right datepicker"><div class="input-group-addon"><i class="fa fa-calendar"></i></div></div></div>');
            $_div.on('click', function () {
                page.property.property_Date_show($(this));
            });
            $_div.append($_name, $select);
            target.append($_div);
            //Date picker
            page.public.AminLTE_forms();
        },
        newTime: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>Time</label>');
            var $select = $('<div class="col_w_80"><div class="input-group"><input type="text" class="form-control pull-right timepicker"><div class="input-group-addon"><i class="fa fa-clock-o"></i></div></div></div>');
            $_div.on('click', function () {
                page.property.property_Time_show($(this));
            });
            $_div.append($_name, $select);
            target.append($_div);
            //Date picker
            page.public.AminLTE_forms();
        },
        newTextArea: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>textarea</label>');
            var $select = $('<div class="input-group col_w_80"><textarea class="form-control k-textbox"></textarea></div>');
            $_div.on('click', function () {
                page.property.property_TextArea_show($(this));
            });
            $_div.append($_name, $select);
            target.append($_div);
        },
        newPills: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_pills = $('<div class="nav nav-pills nav-stacked"><li><a>Nav 1</a></li><li><a>Nav 2</a></li><li><a>Nav 3</a></li></div>');
            $_div.attr('id', 'pills' + '_' + index_id++);
            $_div.on('click', function () {
                page.property.property_Pills_show($(this));
            });
            $_div.append($_pills);
            target.append($_div);
        },
        newButton: function (target) {
            var $_div = $('<div class="form_btn" data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $select = $('<div class="input-group"><button class="btn btn-default">Button</button></div>');
            $_div.on('click', function () {
                page.property.property_button_show($(this));
            });
            $_div.append($select);
            target.append($_div);
        },
        newHeader: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $select = $('<div class="header_container"><h3 class="h3">Header</h3></div>');
            $_div.on('click', function () {
                page.property.property_header_show($(this));
            });
            $_div.append($select);
            target.append($_div);
        },
        newLookup: function (target) {
            var $_div = $('<div class="form_list"  data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $_name = $('<label>Looup</label>')
            var $select = $('<div class="from_lookup"></div>');
            var $select_contian = $('<div class="input-group "></div>')
            var $input = $('<input type="text" placeholder="" class="form-control">');
            var $button = $('<div class="input-group-btn"><button class="btn btn-default" type="button"><i class="glyphicon glyphicon-search"></i></button></div>')
            $_div.on('click', function () {
                page.property.property_lookup_show($(this));
            });
            $select_contian.append($input, $button);
            $select.append($select_contian);
            $_div.append($_name, $select);
            target.append($_div);
        },
        newParagraph: function (target) {
            var $_div = $('<div class="paragraph" data-trigger="hover" data-toggle="popover" data-placement="left" ></div>');
            var $paragraph = $('<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>');
            $_div.on('click', function () {
                page.property.property_paragraph_show($(this));
            });
            $_div.append($paragraph);
            target.append($_div);
        },
        newPanel: function (target) {
            var $_container = $('<div class="panel_container"></div>');
            var $_head = $('<div class="panel_head">Panel</div>');
            var $btn_property = $('<i style=" cursor: pointer;" class="pull-right  glyphicon glyphicon-cog"></i>');
            var $_main = $('<div class="panel_main"></div>');
            $btn_property.on('click', function () {
                page.property.property_Panel_show($_container);
            });
            $_head.append($btn_property);
            $_container.append($_head, $_main);
            target.append($_container);
        },
        newTab: function (target) {
            var $_container = $('<div class="tab_container"></div>');
            var $_contian = $('<ul class="nav nav-tabs">' +
                '<li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>' +
                '<li><a href="#tab2" data-toggle="tab">Tab 2</a></li>' +
                '</ul>');
            var $btn_property = $('<i class="pull-right btn_property glyphicon glyphicon-cog"></i>');
            var $_main = $('<div class="tab-content">' +
                '<div class="tab-pane active" id="tab1"></div>' +
                '<div class="tab-pane" id="tab2"></div>' +
                '</div>');
            $_container.attr('id', 'tab' + '_s_' + index_id++);
            $btn_property.on('click', function () {
                page.property.property_Tab_show($_container);
            });
            $_contian.append($btn_property);
            $_container.append($_contian, $_main);
            target.append($_container);
        },
        newCollapse: function (target) {
            var $_container = $('<div class="accordion-group"></div>');
            var $_contain = $('<div class="accordion-body collapse"><div class="accordion-inner"></div>');
            $_contain.attr('id', 'collapse' + '_' + index_id++);
            var $id = $_contain.attr('id');
            var $_title = $('<h5><a data-toggle="collapse" data-parent="#" href="#' + $id + '">Collapse</a><i class="pull-right glyphicon glyphicon-cog"></i></h5>');
            var $_btn = $_title.children('i');
            $_btn.on('click', function () {
                page.property.property_Collapse_show($(this));
            });
            $_container.append($_title, $_contain);
            target.append($_container);
            $('.collapse').collapse();
        }
    },
    update: {
        update_option: function ($id, property) {
            var $id = $id;
            var property = property;
            var $select = $('#' + $id + '>div>select');
            var options = property.find('input');
            $('.option_list').empty();
            for (var i = 0; i < options.length; i++) {
                var $option = $('<option></option>');
                $option.val(options[i].value);
                $option.text(options[i].value);
                $select.append($option);
            }
            page.contact.contact_option($id, property);
        },
        update_check: function ($id, property) {
            var $id = $id;
            var property = property;
            var $input = $('.option_list').find('input');
            var $select = $('#' + $id + '>div');
            $('.option_list').empty();
            for (var i = 0; i < $input.length; i++) {
                var label = $('<label></label>');
                label.text($input[i].value);
                label.append('<input type="checkbox" />');
                $select.append(label);
            }
            page.contact.contact_check($id, property);
        },
        update_radio: function ($id, property) {
            var $id = $id;
            var property = property;
            var $input = $('.option_list').find('input');
            var $select = $('#' + $id + '>div');
            $('.option_list').empty();
            for (var i = 0; i < $input.length; i++) {
                var label = $('<label></label>');
                label.text($input[i].value);
                var radio = $('<input type="radio"/>');
                radio.attr('name', $id + '0_0');
                label.append(radio);
                $select.append(label);
            }
            page.contact.contact_radio($id, property);
        },
        update_pills: function ($id, property) {
            var $id = $id;
            var property = property;
            var $input = $('.option_list').find('input');
            var $elem = $('#' + $id + '>div');
            $('.option_list').empty();
            for (var i = 0; i < $input.length; i++) {
                var $li = $('<li></li>');
                var $a = $('<a></a>');
                $a.text($input[i].value);
                $li.append($a);
                $elem.append($li);
            }
            page.contact.contact_pills($id, property);
        },
        update_tab: function ($id, property) {
            var $id = $id;
            var property = property;
            var elem = $('#' + $id);
            var $input = property.find('input');
            var $ul = elem.children('ul');
            var $div = elem.children('div');
            for (var i = 0; i < $input.length; i++) {
                var li = $('<li></li>');
                var a = $('<a data-toggle="tab" aria-expanded="false"></a>');
                var div = $('<div class="tab-pane"></div>')
                a.text($($input[i]).val());
                li.append(a);
                $ul.append(li);
                $div.append(div);
            }
            page.contact.contact_tab($id, property);
        }
    },
    add: {
        add_option: function (btn, $id, property) {
            var property = property;
            var $id = $id;
            btn.on('click', function () {
                var $select = $('#' + $id + '>div>select');
                $select.empty();
                var input = $('<input placeholder="title"></input>');
                $('.option_list').append(input);
                page.update.update_option($id, property);
            });
        },
        add_check: function (btn, $id, property) {
            var property = property;
            var $id = $id;
            btn.on('click', function () {
                var $select = $('#' + $id).children('div');
                $select.empty();
                var $input = $('<input></input>');
                $('.option_list').append($input);
                page.update.update_check($id, property);
            });
        },
        add_radio: function (btn, $id, property) {
            var property = property;
            var $id = $id;
            btn.on('click', function () {
                var $select = $('#' + $id).children('div');
                $select.empty();
                var $input = $('<input></input>');
                $('.option_list').append($input);
                page.update.update_radio($id, property);
            });
        },
        add_pills: function (btn, $id, property) {
            var property = property;
            var $id = $id;
            btn.on('click', function () {
                var $elem = $('#' + $id).children('div');
                $elem.empty();
                var input = $('<input></input>');
                $('.option_list').append(input);
                page.update.update_pills($id, property);
            });
        },
        add_tab: function (btn, $id, property) {
            var property = property;
            var $id = $id;
            btn.on('click', function () {
                property.empty();
                var $input = $('<input></input>');
                $('.option_list').append($input);
                page.update.update_tab($id, property);
            });
        },
        add_label: function (btn, goal) {
            var label = $('<span></span>');
            btn.change(function () {
                goal.find('span').empty();
                goal.append(label);
                var $this = $(this).val();  //left input.value
                label.text($this);
            });
        }
    },
    del: {
        del_option: function (btn, $id, property) {
            var $id = $id;
            var property = property;
            btn.on('click', function () {
                var $select = $('#' + $id).find('select');
                $select.empty();
                var option_list = $('.option_list').find('input');
                option_list.eq(-1).remove();
                page.update.update_option($id, property);
            });
        },
        del_check: function (btn, $id, property) {
            var $id = $id;
            var property = property;
            btn.on('click', function () {
                var $select = $('#' + $id).children('div');
                $select.empty();
                var option_list = $('.option_list').find('input');
                option_list.eq(-1).remove();
                page.update.update_check($id, property);
            });
        },
        del_radio: function (btn, $id, property) {
            var $id = $id;
            var property = property;
            btn.on('click', function () {
                var $select = $('#' + $id).children('div');
                $select.empty();
                var option_list = $('.option_list').find('input');
                option_list.eq(-1).remove();
                page.update.update_radio($id, property);
            });
        },
        del_pills: function (btn, $id, property) {
            var $id = $id;
            var property = property;
            btn.on('click', function () {
                var $elem = $('#' + $id).children('div');
                $elem.empty();
                var option_list = $('.option_list').find('input');
                option_list.eq(-1).remove();
                page.update.update_pills($id, property)
            });
        },
        del_tab: function (btn, $id, property) {
            var $id = $id;
            var property = property;
            btn.on('click', function () {
                var $elem = $('#' + $id).children('ul');
                $elem.empty();
                var option_list = $('.option_list').find('input');
                option_list.eq(-1).remove();
                page.update.update_tab($id, property)
            });
        }
    },
    change: {
        change_text: function (left_input, right_goal) {
            left_input.change(function () {
                var $this = $(this).val();
                right_goal.text($this);
            });
        },
        change_value: function (left_input, right_goal) {
            left_input.change(function () {
                var $this = $(this).val();  //left input.value
                right_goal.val($this);
            });
        },
        change_placeholder: function (left_input, right_goal) {
            left_input.change(function () {
                var $this = $(this).val();
                right_goal.attr('placeholder', $this);
            });
        },
        change_id: function (btn, goal) {
            btn.change(function () {
                var $this = $(this).val();  //left input.value
                goal.attr('id', $this);
            });

        },
        change_name: function (btn, goal) {
            btn.change(function () {
                var $this = $(this).val();  //left input.value
                goal.attr('name', $this);
            });

        },
        change_hover: function (btn, goal) {
            btn.change(function () {
                var $this = $(this).val();  //left input.value
                goal.attr('data-content', $this);
                $(function () {
                    $("[data-toggle='popover']").popover();
                });
            });
        },
        change_header: function (btn, $div) {
            btn.change(function () {
                if ($div.find('h1').hasClass('h1')) {
                    var $this = $(this).val();
                    $div.find('h1').text($this)
                }
                if ($div.find('h2').hasClass('h2')) {
                    var $this = $(this).val();
                    $div.find('h2').text($this)
                }
                if ($div.find('h3').hasClass('h3')) {
                    var $this = $(this).val();
                    $div.find('h3').text($this)
                }
                if ($div.find('h4').hasClass('h4')) {
                    var $this = $(this).val();
                    $div.find('h4').text($this)
                }
                if ($div.find('h5').hasClass('h5')) {
                    var $this = $(this).val();
                    $div.find('h5').text($this)
                }

            })
        },
        change_option:function(btn,$id){
                btn.change(function () {
                    var $this = $(this);
                    var $option = $('#' + $id + '  ' + 'option:eq(' + $this.data("id") + ')');
                    $option.text($this.val());
                    $option.val($this.val());
                });
        },
        change_check:function(btn,$id){
            btn.change(function () {
                var $this = $(this);
                var checks = $('#' + $id + ' ' + 'div label' + ':eq(' + $this.data("id") + ')');
                checks.text($this.val());
                checks.val($this.val());
                checks.append('<input type="checkbox" />');
                // console.log($('#'+$id+' label:eq('+ $this.data("id") +')'))
                // console.log($this.data("id"))
            })
        },
        change_radio:function(btn,$id){
            btn.change(function () {
                var $this = $(this);
                var $_div = $('#' + $id + ' ' + 'div label' + ':eq(' + $this.data("id") + ')');
                $_div.text($this.val());
                $_div.val($this.val());
                var radio = $('<input type="radio" />');
                $_div.append(radio);
                // console.log($('#'+$id+' label:eq('+ $this.data("id") +')'))
                // console.log($this.data("id"))
            })
        },
        change_panelFooter:function(btn,$elem){
            btn.change(function(){
                var footer = $elem.children('div')[2];
                var $_footer = $('<div class="panel_footer"></div>');
                var $this = $(this).val();
                if(footer){
                    footer.remove();
                }
                if($this){
                    $_footer.text($this);
                    $elem.append($_footer);
                }else{
                    footer.remove();
                }
            });
        },
        change_pills:function(btn,$id){
            btn.change(function () {
                var $this = $(this);
                var $lis = $('#' + $id + ' ' + 'a:eq(' + $this.data('id') + ')');
                $lis.text($this.val());
            })
        },
        change_tab:function(btn,$id){
            btn.change(function () {
                var $this = $(this);
                var $lis = $('#' + $id + ' li ' + 'a:eq(' + $this.data('id') + ')');
                $lis.text($this.val());
            });
        },
    },
    contact:{
        contact_option: function ($id, property) {
            var $id =$id;
            var $select = $('#' + $id + '>div>select option');
            for (var i = 0; i < $select.length; i++) {
                var id = 'option___' + i;
                var $input = $('<input id="' + id + '" value=""  placeholder=""/>');
                $input.val($select[i].value);
                $input.data('id', i);
                property.append($input);
                page.change.change_option($input,$id);
            }
        },
        contact_check: function ($id, property) {
            var $id =$id;
            var $select = $('#' + $id + '>div>label');
            for (var i = 0; i < $select.length; i++) {
                var id = 'select____' + i;
                var $input = $('<input id="' + id + '" value="" placeholder="name"/>');
                $input.val($select[i].innerText);
                $input.data('id', i);
                property.append($input);
                page.change.change_check($input,$id);
                
            }
        },
        contact_radio: function ($id, property) {
            var $id =$id;
            var $select = $('#' + $id + '>div>label');
            var $radio = $('#' + $id + '>div>label>input');
            for (var i = 0; i < $select.length; i++) {
                var id = 'radio____' + i;
                var $input = $('<input id="' + id + '" value="" placeholder="name"/>');
                $input.val($select[i].innerText);
                $input.data('id', i);
                property.append($input);
                $radio.attr('name', $id + '_0_0');
                page.change.change_radio($input,$id);
            }
        },
        contact_pills: function ($id, property) {
            var $id = $id;
            var $contian = $('#' + $id + '>div>li');
            for (var i = 0; i < $contian.length; i++) {
                var id = 'lis____' + i;
                var $input = $('<input id="' + id + '" value="" placeholder="name"/>');
                $input.val($contian[i].innerText);
                $input.data('id', i);
                property.append($input);
                page.change.change_pills($input,$id);
            }
        },
        contact_tab: function ($id, property) {
            var $id = $id;
            var $li = $('#' + $id + '>ul>li');
            var $a = $('#' + $id + '>ul>li>a');
            var $contain = $('#' + $id + '>div>div');
            property.empty();
            for (var i = 0; i < $li.length; i++) {
                // tab 切换界面 id赋值
                var tab_id = $id + '_2019_' + i;
                var id = 't_a_b_' + i;
                $($a[i]).attr('href', '#' + tab_id);
                $($contain[i]).attr('id', tab_id)
                //  属性界面input 赋值与动态生成
                var $input = $('<input id="' + id + '"/>');
                $input.val($($a[i]).text());
                $input.data('id', i);
                property.append($input);
                // change
                page.change.change_pills($input,$id);
                
            }
        }
    },
    public: {
        AminLTE_forms: function () {
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2();

            //Datemask dd/mm/yyyy
            $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' });
            //Datemask2 mm/dd/yyyy
            $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
            //Money Euro
            $('[data-mask]').inputmask();

            //Date range picker
            $('#reservation').daterangepicker();
            //Date range picker with time picker
            $('#reservationtime').daterangepicker({ timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A' });
            //Date range as a button
            $('#daterange-btn').daterangepicker(
                {
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    startDate: moment().subtract(29, 'days'),
                    endDate: moment()
                },
                function (start, end) {
                    $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
                }
            );

            //Date picker
            $('.datepicker').datepicker({
                autoclose: true
            });

            //iCheck for checkbox and radio inputs
            $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                checkboxClass: 'icheckbox_minimal-blue',
                radioClass: 'iradio_minimal-blue'
            });
            //Red color scheme for iCheck
            $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
                checkboxClass: 'icheckbox_minimal-red',
                radioClass: 'iradio_minimal-red'
            });
            //Flat red color scheme for iCheck
            $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });

            //Colorpicker
            $('.my-colorpicker1').colorpicker();
            //color picker with addon
            $('.my-colorpicker2').colorpicker();

            //Timepicker
            $('.timepicker').timepicker({
                showInputs: false
            });
        })
        },
        text_align: function (align, kind) {
            align.change(function () {
                var $value = $(this).children('option:selected').val();
                if ($value == 1) {
                    kind.removeClass();
                    kind.addClass('align_left');
                    kind.next().removeClass('col_w_100');
                    kind.next().addClass('col_w_80');
                }
                if ($value == 2) {
                    kind.removeClass();
                    kind.addClass('align_center');
                    kind.next().removeClass('col_w_100');
                    kind.next().addClass('col_w_80');
                }
                if ($value == 3) {
                    kind.removeClass();
                    kind.addClass('align_right');
                    kind.next().removeClass('col_w_100');
                    kind.next().addClass('col_w_80');
                }
                if ($value == 4) {
                    kind.removeClass();
                    kind.addClass('align_top');
                    kind.next().removeClass('col_w_80');
                    kind.next().addClass('col_w_100');
                }
            });
        },
        btn_inline: function (btn, right_btn) {
            var form_list = right_btn.parent().parent();
            btn.on('click', function () {
                if (form_list.attr('class') === 'form_btn') {
                    form_list.removeClass('form_btn');
                    form_list.addClass('form_btns');
                    btn.addClass('btn-success');
                    btn.removeClass('btn-default');
                    // success
                } else {
                    form_list.removeClass('form_btns');
                    form_list.addClass('form_btn');
                    btn.removeClass('btn-success');
                    btn.addClass('btn-default');
                }
            })
        },
        btn_size: function (selectVal, btnSize) {
            selectVal.change(function () {
                var remove = btnSize.removeClass('btn btn-default btn-lg  btn-sm  btn-xs');
                if (selectVal.val() == 1) {
                    remove;
                    btnSize.addClass('btn btn-default');
                }
                if (selectVal.val() == 2) {
                    remove;
                    btnSize.addClass('btn btn-default btn-lg');
                }
                if (selectVal.val() == 3) {
                    remove;
                    btnSize.addClass('btn btn-default btn-sm');
                }
                if (selectVal.val() == 4) {
                    remove;
                    btnSize.addClass('btn btn-default btn-xs');
                }
            })
        },
        btn_style: function (selectVal, btnSize) {
            selectVal.change(function () {
                var remover = btnSize.removeClass('btn btn-default btn-primary  btn-success  btn-info  btn-warning btn-danger btn-link');
                if (selectVal.val() == 1) {
                    remover;
                    btnSize.addClass('btn btn-default');
                }
                if (selectVal.val() == 2) {
                    remover;
                    btnSize.addClass('btn btn-primary');
                }
                if (selectVal.val() == 3) {
                    remover;
                    btnSize.addClass('btn btn-success');
                }
                if (selectVal.val() == 4) {
                    remover;
                    btnSize.addClass('btn btn-info');
                }
                if (selectVal.val() == 5) {
                    remover;
                    btnSize.addClass('btn btn-warning');
                }
                if (selectVal.val() == 6) {
                    remover;
                    btnSize.addClass('btn btn-danger');
                }
                if (selectVal.val() == 7) {
                    remover;
                    btnSize.addClass('btn btn-link');
                }
            })
        },
        header_size: function (btn, kind) {
            btn.change(function () {
                var $value = $(this).children('option:selected').val();
                if ($value == 1) {
                    kind.empty();
                    kind.append('<h1 class="h1">Header</h1>');
                }
                if ($value == 2) {
                    kind.empty();
                    kind.append('<h2 class="h2">Header</h2>');
                }
                if ($value == 3) {
                    kind.empty();
                    kind.append('<h3 class="h3">Header</h3>');
                }
                if ($value == 4) {
                    kind.empty();
                    kind.append('<h4 class="h4">Header</h4>');
                }
                if ($value == 5) {
                    kind.empty();
                    kind.append('<h5 class="h5">Header</h5>');
                }
            });
        },
        pills_stacked: function (btn, right_contain) {
            btn.on('click', function () {
                if (right_contain.attr('class') == 'nav nav-pills nav-stacked') {
                    btn.removeClass('btn-default');
                    btn.addClass('btn-success');
                    right_contain.removeClass('nav-stacked');
                } else {
                    btn.removeClass('btn-success');
                    btn.addClass('btn-default');
                    right_contain.addClass('nav-stacked');
                }
            })
        },
        // 检查当前按钮 inline || block
        Btn_mode: function (btn, divClass) {
            if (divClass) {
                btn.removeClass('btn-success');
                btn.addClass('btn-default');
            } else {
                btn.addClass('btn-success');
                btn.removeClass('btn-default');
            }
        }
    },
}