<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>Ejemplos de gr&#225;ficos usando Chart.js</title>
<meta name ="author" content ="Norfi Carrodeguas">
</head>
<body>  	  
<h1>Ejemplos de gr&#225;ficos usando Chart.js</h1><br>

<script src="Chart.js"></script>
<div id="canvas-holder">
<canvas id="chart-area" width="300" height="300"></canvas>
<canvas id="chart-area2" width="300" height="300"></canvas>
<canvas id="chart-area3" width="600" height="300"></canvas>
<canvas id="chart-area4" width="600" height="300"></canvas>
</div>
<script>
var pieData = [
				{   value: 40,
					color:"#0b82e7",
					highlight: "#0c62ab",
					label: "Google Chrome"},
				{
					value: 16,
					color: "#e3e860",
					highlight: "#a9ad47",
					label: "Android"
				},
				{
					value: 11,
					color: "#eb5d82",
					highlight: "#b74865",
					label: "Firefox"
				},
				{
					value: 10,
					color: "#5ae85a",
					highlight: "#42a642",
					label: "Internet Explorer"
				},
				{
					value: 8.6,
					color: "#e965db",
					highlight: "#a6429b",
					label: "Safari"
				}
			];

	var barChartData = {
		labels : ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
		datasets : [
			{
				fillColor : "#6b9dfa",
				strokeColor : "#ffffff",
				highlightFill: "#1864f2",
				highlightStroke: "#ffffff",
				data : [90,30,10,80,15,5,15]
			},
			{
				fillColor : "#e9e225",
				strokeColor : "#ffffff",
				highlightFill : "#ee7f49",
				highlightStroke : "#ffffff",
				data : [40,50,70,40,85,55,15]
			}
		]

	}	
		var lineChartData = {
			labels : ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
			datasets : [
				{
					label: "Primera serie de datos",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#6b9dfa",
					pointColor : "#1e45d7",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [90,30,10,80,15,5,15]
				},
				{
					label: "Segunda serie de datos",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "#e9e225",
					pointColor : "#faab12",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [40,50,70,40,85,55,15]
				}
			]

		}
var ctx = document.getElementById("chart-area").getContext("1d");
var ctx2 = document.getElementById("chart-area2").getContext("2d");
var ctx3 = document.getElementById("chart-area3").getContext("2d");
var ctx4 = document.getElementById("chart-area4").getContext("2d");
window.myPie = new Chart(ctx).Pie(pieData);	
window.myPie = new Chart(ctx2).Doughnut(pieData);				
window.myPie = new Chart(ctx3).Bar(barChartData, {responsive:true});
window.myPie = new Chart(ctx4).Line(lineChartData, {responsive:true});
</script>
</body>
</html>
                                                                                                                  octet-stream-compressible; charset=x-user-defined
Date: Sat, 07 Jan 2017 15:20:40 GMT
Expires: Thu, 21 Sep 2017 20:11:02 GMT
Cache-Control: public, max-age=22222222
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
Content-Encoding: gzip
Server: paintfe
Content-Length: 74
x-xss-protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alt-Svc: quic=":443"; ma=2592000; v="35,34"
X-Firefox-Spdy: h2
 original-response-headers Content-Type: application/vnd.google.octet-stream-compressible; charset=x-user-defined
Date: Sat, 07 Jan 2017 15:20:40 GMT
Expires: Thu, 21 Sep 2017 20:11:02 GMT
Cache-Control: public, max-age=22222222
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
Content-Encoding: gzip
Server: paintfe
Content-Length: 74
x-xss-protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alt-Svc: quic=":443"; ma=2592000; v="35,34"
X-Firefox-Spdy: h2
    J                                                                                                               nu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="/static/img/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Bienvenido,</span>
                <h2>
                  {# {% block welcome-msg %} #}
                  {# {% trans 'Welcome,' %} #}
                  <strong>
                    {# {% filter force_escape %} #}
                      {% firstof user.first_name user.username %}</strong>.
                {# {% endblock %} #}
                </h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->

            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>Plataforma</h3>
                <ul class="nav side-menu">
                  {% url 'admin:index' as index_url %}
                   <li{% if index_url == request.path %} class="active"{% endif %}>
                     <a href="{{ index_url }}"><i class="fa fa-home"></i>Inicio
                     </a>
                   </li>
                   {# ***************************************************#}
                   <li {% if "Propiedad/listar"  in request.path %} class="active" {% elif "Propiedad/crear"  in request.path %} class="active"{% endif %}>
                      <a ><i class="fa fa-building"></i>Propiedades<span class="{% if  'Propiedad/listar' in request.path or 'Propiedad/crear' in request.path %}fa fa-chevron-down {% else %} fa fa-chevron-right  {%endif%} "></span></a>
                   <ul class="nav child_menu"  {% if "Propiedad/listar" in request.path %} style="display:block;"{% endif %}> 
                      <li {% if "Propiedad/listar" in request.path %} class="current-page" {% endif %}>
                        <a href="{% url 'Propiedad:Solicitud_listar' %}">
                           Mis propiedades
                        </a> 
                        {# *********************************** #}
                        {% block accioneslist %}
                        {# <ul class="nav child_menu" style="display:blockd;"> #}
                          {# <li class="sub_menu" ><a href="">carteh</a></li> #}
                        {# </ul> #}
                          
                        {% endblock %}
                    {# ************************** #}
                      </li>
                      <li {% if "Propiedad/crear" in request.path %} class="current-page" {% endif %}>
                        <a href="{%url 'Propiedad:Solicitud_crearpro' %}">Agregar propiedad</a> 
                      </li>
                  </ul>
                 </li>
                 {# ***************************************************#}
                 <li {% if  "Propiedad/bancos" in request.path %} class="active"{% endif %}><a ><i class="fa fa-bank"></i>Bancos</a>
                   <ul class="nav child_menu">
                      <li {% if "bancos/listar" in request.path %} class="current-page"{% endif %}>
                          <a href="{%url 'Propiedad:Solicitud_listarBanco' %}">Mis Bancos
                          </a> 
                      </li>
                      <li {% if "bancos/crear" in request.path %} class="current-page"{% endif %}>
                          <a href="{%url 'Propiedad:Solicitud_crearBanco' %}">Agregar banco
                          </a>
                      </li>        
                    </ul>
                   </li>
                 
                </ul>
              </div> {# menu section #}

            </div> {# sidebarmenu #}
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small footer_fixed">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->

          </div>
        </div>

        
      {% endif %}
        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav class="">

              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                
                <div class="zapphy_datetime">
                  <span class="date"> {% suit_date %}</span>
                  <span class="time" id="clock">{% suit_time %}</span>
               </div>
              </div>
              {# <div class="nav navbar-nav"> #}
              {# </div> #}
              
              <ul class="nav navbar-nav navbar-right">
                
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="/static/img/img.jpg" alt="">{% firstof user.first_name user.username %}</strong>.
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>

                <li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
                <div class="right_col" role="main">
          <div class="">
 <!--           <div class="page-title">
              <div class="title_left">
                {# <h3>Plain Page</h3> #}
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="row">
              {% block breadcrumbs %}
                <ul class="breadcrumb breadcrumless">
                  <li><a href="{% url 'admin:index' %}">Inicio</a>
                    {# {% if title %} #}
                      <span class="divider">&raquo;</span>
                      </li>

                  {% for datos in breadurl %}
                      {% if forloop.last %}
                           <li class="active">
                            <strong>
                            {{datos.nombre}}
                            </strong>
                      {% else %}   
                            <li>   
                            {% if datos.arg %}
                                {% if datos.arg2 %}
                                <a href="{% url datos.url datos.arg datos.arg2%}">{{datos.nombre}}</a>
                                {% else %}
                                <a href="{% url datos.url datos.arg %}">{{datos.nombre}}</a>
                                {% endif %}

                            {% elif datos.url%}
                                <a href="{% url datos.url %}">{{datos.nombre}}</a> 
                            {% else %}
                        <a href="">{{datos.nombre}}</a>                       {% endif %}                
                      <span class="divider">&raquo;</span>
                      {% endif %}
                      
                      </li>
                  {% endfor %}
                </ul>
              {% endblock %}
            {% block messages %}

              {% if messages %}
              {# hay un mensaje #}
                {% for message in messages %}
                  <div class="alert alert-{% firstof message.tags 'info' %}">
                    <button class="close"kof����nŰ����ի����U]�ȣ�᷼�c��V�kjH��c*H�D���]ڮ+��'��F��E� 0���?��}�Ԉņi���(����(��쓫)2�q��4Ȁ���+������p��X?a\���I �$�"lR�T��<�S�	5���`b��W�0�8�
uMY��Nn�����e���u��EBg+�ݭ�zq�v i-ފ��&�kc��|�����1��P��z����f��'�.K����n��8�/s)�֭� �W{X>��v�����LFq��_����޻�h��M��Qڼ!84�g'�d�q�.���v��~5P�� ����c=������m\�9Ci��ҥ{M�G���ិ�� �nGm����k�� ?��/\������8,�j쟒�gT���߷=�v�����3�O�Ձ�E�[+&�KUU�||۝��=.x�tJhJ�H��A�m)��!�����P� $�T�� �;��޸�@�y*>(�d4K�ߪ $��@�
DG(()���!�S ��%��@�R��Gb��h�p{��&/�:Lde��.�%�z�����ݹv���CO�>+�k�zZ�nu.3��o� ��?��Ld]�:Ǫ���/E��?rv���N����	��g�$��k����Q�xN@�|����E�\�� 
�r-&���\I���l����G6[�͛r2�K�r��nCU�J�myG����Ǔ��&�����B��4����_"������}�so�ͭ�� ���^�5�n3�Ӽ�����;f���Y�t��J/(�t�P��3Yڸ�t�A�~����W n��s�?�\��/'��N0x��#hZ���лv�$�����x9~��Fv������t\���p����wG��f�GP-�'�ZX*����ː���$�=+�$����s)X�( 4��8.����ST�DU�L�f�S�0��6�q��FE�F�񉃉��ҍbYE�-g�\��nT �T���GtM�˻7�}Q�aTg B�<����L�Ra��@@Č�H=S#��� �&v�(� 
��@Ot F!�0�� � �Ճp0T��h%��U�uCP�%0���-����X�s`4�Q�=_%���$�������C���D!sӃ1#�ղ�nOJ�Q���7��p��ډp&��kk�9ҲP}��E�pp�Ɍ�Y&�RJZM�Z�;"�T�����d�T��8#�����T�۪M�
X|�52���2�`�Zt�
I���$a�R�GU12I�@��|� �zU�D���2`�زa G�� � k�cL 2�j���pT�
]���:�IU$$@bQ�vE�M_,ɜ��R4��I�*3Sb�P��LMܓ�i8e�ݗ�6"�[)"�Sx���7Y%J6*S������QzƩ�E��iKxM<SD�b�,�\3�A
[5�,�vV�̙�u'd��N�Tb�tp
�RWY��"2)#���<iUU��R$P@ :�M�h>hcU2Ԓ@��$U�U.�K�ϛ{2�˿y��~�2�ۏ�j�9�	���u�I����g%L�e�Ѣg�����O���"W6���[���U���8��HIcA�<�E���	9�.�u�+ݩܸ�k)d�Ցf]~�,C� ⸓Ԣ'�/��}��m��;����2!����\�*F� *\���w���|�S��S}��C�>�����pĽ������O��6�U]jaZvr�W>FW�&R"�|+rn�U���>iGľI"�c�
 ��!<���{�;�ͭm̀5�J�Rpsn{���b<M�u���Z���8�?,d%wm�ڕ$I�9#���H�e�@�ш�>Q�IjlV�By��cD������b:;Owp���޽'�L�=6A2l��mz��F�'���g՚U��i�����'ˢRb���p�:t��0�m0��?mZIrbA�4�_	u^�����t���or���]�q׋�'">������'���}���>/ݻ9ٔ�g�ۆ��%�k0�g�z�� ��������� E��a�q��ԭ��߯����'��m� ��Ό���}-�p{z���g[�bCJ'��v���{�m��<��l9=č�!�Neƀ>���VL��F���<Ő73�XĚ7Ek�+M�4�0X�y!�4�Y}48�K4� �f� AD P�4�. !�( �?�	����D� �y%�:D�&@
P�B�� @�2Ȑ |%�orV7Q��ToŒ�6}3��X��m��>�{�?��8ǡ�\>�=?I(-��ѳ��J>{d\�H�jc� �5Y'���T3�����ܛ~��oF�Xyg	�[MR�h�K�)�O���P:wGE�j�i
�G���f��X�G��왂g��-N�a�+�뭏N�W���BWl݉{n@�#�����g%Qοj���LIJ �Ӛ��P��۶�{x�Q��|-��K� VWx��}/�;�^�������� �q�/[>i�E���Y���V����>��nl�ק ֮� Nz2��~�[�g��[�8�������;����hc(
k�j���n,%wA���|sⶒ0]8r���I<o��� f� �HW�� �*Y���6D\�����I��D�:-���p�C($z��^
�E����8������H��-�w�o'!�Z>`u3�&�@M\?��I
 �3��L	���$	�dP0Q �`$ ,�@ � D J  w@�
 �☤,�1�6w#��SGW{;76��iO���+����w\�����'�"����D'�����_C��ڼ�o���"F�W�j�=,!w֬�v�\�MK���ug�"�v�J"b
�P��BH�E"�* ��0lz&K%Rl��@�j@J�k�RR"$��i��l�?�IH@��d� ���r��5eT��OT� �D����c��R%"�b�!�p����dt�A
Cb�Ψ@$`�*
H��1F8�D�	6� Bȇ���J�1"���6D|�CH(�	�piQm���� ˄C9U�AQ���d���Xd�m�N%��C.��Ć�!��ݸ���F��H�c^�&&��ZY:C�q� "0��uā�Y( ��I\� �U-��L>	�Lx�=iT�e�'㊫D�O�{��ݟ{�rx���Dt�m��,�ɝl(�kd�NW+�؞ >K�~��bw�u���>^�2�e�{��j�����jȉi ���L�J��������c��g�-y<���ʹ�����M��۱�wnK�!���o�G�[6t�G����� uqs�@�n@� k�'\6p8���T�M�#�\֒�>OG��u�MA��FtT��_Iȍ�ׯ�3@�0�r��p���@�m�0h�� �ʲ0��" /��� 9�r��d�Ӫ\�����%�K9����ng+����֔��&�<����re+Z�vxH�꯶��=	�s�ۻQm|۹v����W����Y���oy�&����(�1q �G�[ڴ��������w��ی73��M.
�\;�X�N�{��[�gsd�nC�|��ui�9.>��Mv& =c�*�x�C>k�q�rv/�arr0o0�/cV��O?v�在潭�;<��r����]�	D��}A^����O2Ӯ���~��=���-om47�bC��U����>��8=�;�V<��O��o;7�[�#�\ճ���Ŕ�>�{b� ��ŭJ�h����2��U?��m���(LJ%�E\p;)Y7�w=�b%�j���~������E�(�!�p�0I�Q�� q� " � �:d���J ��� �*٠K�>��ABe�h�2�I�@ �hD� �5�,z����0}0s��:�p+jr�n3�4ɥ���K�[��w�Ƶ{os� �����_Le��K��Y=oE�C~���;�we/CG�r5:�画.W)�}�{�6��9�_�[�'c�X7��Tg	��;L&i��wO��~������pw������O)Z����_�G��kz����k�F[��}��^�4CVD���e�,ɧ�� �y3��}�wo���p�v��K $N��'�k�\k�6s�ܻ��+����_�̝O�X���C6�=g�4��-�;a;0����H������B�8m���ou\����n/��j��� ��	w��-����z4ϱ��g��v%��4��4ݴ�E��;��Ku������$����7n�Pi�Vd'�:d$r��_�����ݘ�D�**䃇�j�1��J��-�WI�u��s�⪹C��g�z��G���]`�Iƃ�R�!զ@��@��Ð�����$#��j�t�G_�o���}0������Bp�r�с��4���է�%`� 2�4Ti�Q!�3�� � ��0֏���� *(	 +&0���� �� O����F��@��2�RC۹��	�%��n��z~h����nb�8�tSh�#������lmΐ�C7^g�V��� _d�>���MLT�)U��a�9�nB�4�~�jk�Xg�$�Z�yi�K:�:)hi��5#!�P	�ʄ�2h�D�@ԉPk.�&��mA2`I�B�`���]2bu�Kћ��Y!$�0�ɓ�
M �"���5!����@�4�	)6		�<�n�;�uRL�haGQ$5 .���#�@�pΩ38�rF	v.5)@��1�&4��z�0��)l��P���%6�E1�Q�ϩrCr �)�LiJ�@�y+l�W܏��J�X  +H�$���A%^�M𪔲[x.���tD"$�5 /���`��!���Sɨ�4�,��c�4&r4
��*�ҐEN�(o%H�i� ��+�=��jW�'���Ƕ��{��lɡ��ތ{�l��֙��3�7Q��.K,��a��z��[������`����Ʃ�b⇺iJ'��4\�|���峖XDCyEDz��Zp�������n�p��B.grR4��*dJ�N��ǂo~�|������X�G9��X��?g#�;H\đ���8����7u�k��u��ܞ�|��4��r�.y6�)����)}_T�wDTS;��$F�`d@��#��5�� [��F'Y���P��;�)H@�4��P���;X���\k�궮�ǒ-t���_tq�8@���쨕��:�������P�V]_���LN�RM�P4�o%�N���	LP���f���\��q"���)	���z�mV>u���{�X� �b�Rl�u_��kd�g�9=䶖� $ a8��fW��Q+��o�'����c��SY��..������F�Jv�n�ܜ�Q���wi�9��O�lx�Ofl�na*e��t���<��VR|���5���v����Q:7{g:.�0��߯�N]up~��Ϲ8�q�>ge!sk���ı�O��W��G��&�� �gY���6������e�v� _vӫ�s{U� $~Y�b�i��h�JIh�d;�2V�@6N�
d\���*8��`8��� ��~U  �+FLAf8�&$4�LR4m��q#�M)p,�0H�c�e�"����@��-�^��Ż����Hx��V� w=�Ǎ������#l_�Tj��F��;Ԕ�_��w�����-�׹�#d�Cr5�/��w�x:�;D��Ƒnw���r����������*�u˲Ҡ�5cN�#j{~�)k���8�"`O�N�#"��=N���J����>��/t�3�j�o8��y�`��%��]����j��Mr|g�ޞ/����&�-&�$���v%eL�6��4׃�}���o�����櫀S�rz�z����v��-�K�����wxۄ��؉���`��[%;��۲4��;��o(��پv77�H�R��p�R$y��ؑͻֲry}��|�.��Z� �
�NNxg�~�{��8��&��<p�g�����әG��n� y�|�ۍ��z��de�Q�~���U�������|�Ebc��`tD`��1��^� �,q�F����M��,��=d'��=�r�x�쥡��̠���Q��hF���%���l9�6�چ�/OS0TuO��~�7����7{x�o<�3�p�A[��ͩ	�E]����c��D=
K�T�n��B���0#��tt ]�t� �?4
I��d@H�$05S �@�H �%�Tn�GURgr�f�JH^�"�� L׷�g���b�i��9�3���G���#��2zǳ%�Ge�mãL���ҽr��"[Q?p�����ٓ��{��#�U�.d;.M�uGN�K>�,Ml�P�Eؤ������CJ��CeJE!d(r��"Ѐ��Ch5�@ d������@)@� ��Xxų�M
F
���MS@����*O�OR$Q2�I8��i2�X$�dDʖ8?�b���.Bf>9�jCj���`\�%0PA�(#�葈IqL�P�IZ�Ǣ��&1��RB�I@h��	�	�hC(Ƿd��,]@ɔ�-�V 0�@)�ĩ��"��0�U�HM����H��42���>jII�짤��ԅ��[l����I�a�Μ��58gpp!) ��<�/�<]4���Y 9�-�*q���ƈ�B� lp"|4�H���k�3绫��~x�~X��=�l�j��A�:ꪝ_�3��}��#0;.[Z\�UB���&p������Ҡ�|�Vpv��n?y�Z�a{x4���I�Z�?�n�3f�+;=���"�I �`+�N��7<��K��-{��V6�� ٶ�c_� Z��_�t����Zrs����=^�w.=Li�5�\��uUyg&�g	�D��P+Y���N���,;�b�dL�����a���	6�H��'���K}�� b�2K�e6�3�`�r��TܨE��(o �"#B<R�ტg�������=�؋���+�_���_D�y�?t�W4�-��I����U��� bg��ﾭ\�,ow"��1�_ͷմM龿��{�[���@ڻ������D��L���sncTH������r9O�=����19��-݉�Ir4�2��Ot���4��G�����.Fƽ6�f��r�}���N}Ӯ�q�ב�[�N�՗��[�=��Y`�������u}DTj���d���X��[�"M����� ۧ��x>'�+6ɹ���2�}e�5<��B� �/w�W�hn�y ;�<����+���}��'��_0ϩ}��%�{�ېD��3�ƣ��˓ӷ[�f�G��%�H!z�_s8)�����|���(!"�v@"�
3@�>��  5LB@O`� G|�	�X�i �����H��KV	��e���m���x���X��z���#��+G�;=n��n������}͹Z�l革� �����8*��)�d3��	��"@���I��!o���k�}� �tJ��L��$ҹg/�|��'����Zvn_3�R��[����c�����b{Ko����$29�1��g��őѷ�������z=;�ґ�<~��f��.:�=����c��#v�W��Ɨ}1�Y@��4��ȩY�.����7����x]�bd7<}�� �I|({�ON�ڲx;���G[����8k�M��^�dޡ���k��u� �ɷ�v���qĹ�i{�oy�b��F���gp�AZ��e �:vO������9��Ogm�&�#fYݐ���c#��k�z�߲��O������s@H�ġ���	�$tguR����Փ̉�8��wv.w"ZD2�9FI���sv=��Go�c��"v���VQ׻��ynFߥr�&������M��י9 D����_�mx��y5[ <:�[���k��u�� 擪a�3?P�!�L�?#�I�1VP�w����r�`h� q ���?���gJ�$��F
+3�ER���M�Li�h#���@�(A����1I�f�T�� ��0(�� $a	d�%�e�l�ՁT�dd ~i1 6n���Q0 ��M;[�� \ōBpe��zN#���lܑa�%��ZNk&~��a���vq��%��Z���mux=�I+)g�����\-G��2+���N��}�ZI�ET��`�Q#�J���J����$d�.
��O�E����� �l�Yd���� ���j_ ,dT�Cj�����:���"�v�$|Cf���T���C)ݜ�$Ҩ�mx�,hsWRn��6Zə+���_� �!dY��lb��>������)�&�ə%�%`� �|��K	#䜈S:��.�@�A9$5d�$�DqSf3I?5�f�����]YE�A�*�A�d& $g�C`���09`���Q "�I��M�(|:x)f�Fkr$� ��̶h�`�Fli9�z��Tx��)U�f	��ِ5.������$`�.�G.�4 �4 ^�S	�c����o�7��p=��ݏ�ẹ���-�#�+���,a���n�Ff'N+�9:���Z���w������HR�&w�#�jޘ�l{�J�8��Y��6ZL8o�_�Qく�9��r=N/fA�:n\%���K�gɃ}����XD hƀ 0`��m
?���E�&E]5�ԙL�	��T�]ӈR,GӔ�z�,ȑ�5�%1F��@V�2Y�I�3��(nDj���[��X� u9c�%��>��i:�G$���<��ɀ�`� (��-��w�H�R��I('��mY��o��+#�58d_��@����p}hݙ�E$�y����8��σ���K�X��S�ͻ��˗e���X=_���Gӑ"��+����s��/g��n�<��=B�F�V-�Md�� �|g D�}-D��į��~Փ��S�=G�=�� k������t�r��+����):=c��>���m�Xk�� X/��OZ�V�(�6�$$Y���r� 1W��#mp|#�(_36�1 E�/sC���>{�osn���N7��H�b�E�	[��8��,-^N�[�B;~[����ks���<\~k���_�OEf���ϳ�ϟ�6�"a;W��%��ܞm0r`*�L��ɲ\�IH����
� �Fo�@+���Tj���� ?�D�2 ����X���eЉfuU3��$a�#.�� JV�0�H�!B�$�ណ�+���ͭ�9/G��6���@a�V��ӯ��y&���fnln#[w"3��v��v+#�BeS"hI�И��Dy�H�r��:E�՘� Ԉ���Go��n �j&�'�L��>�����+���/_?��q���"0������2z~���[kV���݈6��ď��.�����88~Hqҵ�<��AA*1=:���[!��?��=�C��v[��̛�2H2��&���`�{Z�;y>;�o%��}Kf@Hi�1�.�e6�5й��8Y��b�;M�/!����.z.����l��G����{s���E�/y��=���Q\�I��Z0ӵ���=o��m�f����6��������B38Jc6Yi�;}�k�7�e��w"/�X����l�n��v7.��$0$��x�P�O��z���#x�J�)r&�`P�w	vr�Z��1���8���+�I��&�!�V!�3�DqBqG�I�N)�2H��)�L�pZ1�P�En�*e(EQ��G��b�z�J=j�%:&'�; �e�E <6_� ��@��@+&��{q�].ƹ��h��J���J�%�hn���]��ĀsR�J�e� �h�Ha@&�bgCgb��|ֈ����mM�ĩ�����ܔ&'H�Z26��w� ��gq�Kip��W,������ ������N����f�y5X=M���                                                                                                                                                                                                                                                                                                                                                    �X/�M �l/�\� �o/� t/�w �/��T ��/��# }�/�91 ��/��  5�/�$ ��/��B ��/��B ˥/��� �/� ��/�o7 '�/�$ K�/�) ��/�) 9�/��: ?�/�IX A�/��? ��/�+( ��/�c: ��/�x� ��/��$ ��/��  �/��A �/�h� �0��? �0��6 �0��= �0�KS x0�%C � 0�� U80��C =<0�b� =>0��� �@0�g= �@0��6 �H0��" ~U0��� �`0�C  .c0��  �k0�R� �l0�I =q0�7T W�0�= ~�0�7U ߘ0�B� -�0�[F ��0�� ��0�k ��0�� v�0��� ��0�ڑ 3�0�u ��0��9 ��0�+ �0�mU ��0�,� d�0�>� �0�D � 1�v� b1�[/ p1�� 21�
� �1�� 
1�� �1��� �1�d�  1��� �1��O -1�� �.1�1 :91�3Y :91�� �=1��U LC1��+ xL1�s" �`1�5, �o1�+X V�1��> ׇ1��M v�1�ڳ ��1��' C�1��� �1��� ��1�I ��1�- ��1�!" ��1�e? @�1�F ��1��G R�1�� �2��  J2�� <2�֘ �2��3 � 2�= 3>2�� �B2��% 'Y2��6 �[2�N �[2��# <^2�M8 4a2�0� Uh2�� �n2�U i~2��0 �2��. ��2�1 �2�A ��2�޻ v�2�YF !�2��� ��2�H� E�2�C ��2�F� 3��6 �3�U3 �3��� �3��� U3��� �3�X� �"3�W) -3��� �.3��� �13�A �33��= @3�?/ :N3�~� �U3�6� ea3�aF M3��J �3�&� �3�� k�3��� X�3�a* &�3�V� ��3��$ u�3�� �3��T u�3��� v�3��= �3�\� �3�7U %�3�� �3�Y 84��$ �4�" �4�YF �4�YR �4�C: }4��% $ 4�	T �&4��< �.4�b� �K4�� 1P4�T� 9P4� Io4��! �4�YQ ̐4��� 	�4��; �4� ��4��+ ��4��� j�4��" n�4�b� ��4��" =�4�� d�4�� w�4�_< `�4�s7 ��4�& S�4�S ��4��  �5�� e5��� <5�� 55�� �5�]S �%5�W ';5��G )D5�x� �F5�3: :Q5�m �R5�b� w^5�s* �_5�P� �a5�M- �a5�T +b5�>� �j5��= gw5��� z�5��X "�5��  f�5�~� ��5�{C �5��� ��5�� ��5�� ��5�U8 ��5�6� �5�	$ ��5��' ��5�2� ��5��" ��5�&� 7�5�� 6�OS T6�� �6��X ;6��F '6��� �*6��� �W6��& �W6�� �o6��W �}6�M" ;�6�$� ��6�� [�6�Y >�6��. ��6��� ��6��� ��6��� p�6��� ��6�i ��6�EE ��6�8� �6��' ��6��! ��6�S? �7�e$ �7�YM �7�(� �7��� Z7��Q �7�W( 8 7�CW ]#7��  8&7�A! �+7�AW B37�ڼ �57�I9 587�:� �87��X ;7��A �<7�j� W=7�*� aC7�� YT7�� Y7�U. �_7�/+ �g7��< �7�)  c�?2���c����F7�W`s'�d�b�U��$bI%	�"�,� 2���� (�"ǣ 	�$��%J �! 	�]  �pLM|D�,s@�܈R]P��'SV��%Q,��h��a99� u��VO��<F4�Sd6]j �3N���M�$ ̪&M�.>W&�p'c��8���f$�]U����}������Z�����k��	��6����/�7�Ɋ���n}!iZ!��%���]1֙��F��4 ऻ"]��dz���5K,���j�$. �Դf��m MV��2؍�]TG+h�Ɉ� J��@����@RT����C��w#T,�mGŶ��^!���a�]�N�H����\��i������2�E�	�VA�QI�j&��|�Ko z:��f��nЎ,ٕJ�M�9��,�!C-���L�,��I��S��	14��x)�Waサ�1.�3Ղ�����W���K%޹��+�%1C� �u02��� ��"�31=S�;�ȏ�Hl�LX�B"�0M����D�*c^�YI�Z� �9�NBc�'cE\
���k)#?$2a���AE���,�sZБ�n dăp0ۊ6XkX��;.��������ƏGe6P�M6U� re&�Q,�擒t����$뮹9�+� �qY��URg�c9F8,97n`�
S����Ŕ����Pq/Z���Y�"C���{�&���d�d�j�e���$�H-bF� �5Sخ�3��ৰ��ٌ�+��Ԭ�̯elJz��ʭv�HQ�RUe7�`Y_�D7 ��6*��Y`�"�ʝ�:�R푡=G�Ed�.�;�pDH���;Vq�)�6����%���d䆁rM�'��@$�LR�T�ũ���*9-�A.]�P
�k@*�9��lm�m��������eGc�O�ۖyM��w��/n�������7cO�JpV l��7�	� �2D��A�������)�1:�:� �%,C di'cє�J�	dZX6g���V�-�T�� �`h\_�q%Мg A��_��6�P��w��@k�g����j��6��ݷI c!����ٮ�@Hd̉3M���"y�SW��2*��H�vA��1	��c�9p���tV�?q*�� Ei9�����ZA�h��Qϖ�@��Kb2N��	�e��>��F�& ���֪�A(<�7��7����f� ծ�;�xN[\bg&���Ĳ������)@Ȉ���d�!�<���=�$ZB�2���O}�߄�#�����l�%8Dy���?O�\�m��5v�>�w���?k�����cHG\�<F#O��q~����K�t~�o�q>۷�����ٙ�	�2BR� h�Y/W\߻�^���|��9?r߹:�ݛ�� �}WW�~�<� ����}'�;v!h��������#��*�{�'�}ѷXB�{���{��z>����Zg��l�3���� #��KwdF�oWĚ�62�i����������6���x�0� ��ٺK'w����Z���o��VxN>2���h��1��t7�f��U��{ݺ�����oZ�G�/�I���?%��x������M�}]<�#���4L-��4#��4č�ڔf'��C������`��n� ��a)ݣ����g&M����F�-��a�-H��sޚ��JJ�'��PtL  P�[�	�3�zwJ ��t�Rz$P+�0'� !d�	���"Ʉ�[�Bhp\w@���" Y�R��4�\��Z6GbEJ�Ȫ�B�(Hu���b�?����K^��3l�.�w�:b�S
��n�X�j�b@2g��T��kx>���en�fLڀ,|1_=�^l{��Z(=��Zb���&6V)�v¥���r��z��� D3ò���>J#f�>y:�m6f������F,�+WH(�O;^l(�Sέǵn#�d�k�ocDFL��`�@LP�R9hd)0LB�P䰘~)�&`Sn�)z�u���~=TtF��	(��oVa�j�M)� �2bN.����-X�'I5d�M�J��b�M�� :�(��#jH<
 �" ՛�u�T`�dQ6]Tl��pA*t=И�Q2I�S�E��-	3QU�[9A�b�Y�B���"��m��WRYtE�H͂l;T����늚�*��������"3I�1&���D�H	�Q�rL���,�J穩�����#9KC0��Κ��� }8�plV�pc�e��vuU؈t��xG�im��+��p����K�����8�I�[g��Xz2�W&���d�zQuQ�0y(�k��8�/f�iH\�ś�QN��^閈3��CrU�#!JЬ�K5��҇�A��dE�(�[*�k�^@��,-��V�2q�|{�PS��D}!�~+i�Ra�1��8�$���)X6�k�4���r7�H��#]8�J��V�%�Z�{��T-��ƹ��f�W�G�\'׶Ix���L�)I��v)!�H�e�UQ$�,`*���g"%��&�C��?�	y!1�I��p%A� J`o+%�Ko�����V��G��e}������9Nwu�3�lX� |���:��o'�����<��HQ��1裱ܡ"0��.��)Ә�� �Hb��8�Ή��q_�d�䘚-�������`I1�&��d�b%����M"�*.�.z&U'�>mU��>T��#(|@I��d�f�/ۣ˨o�(0u��6���=:�/���VRe����lHN"B�ԑ�c�t�SD�ep���uC�L�7\�R���T�Q���A�U�:(r���ǹ�Z:h�^�pa�Dl���n�0y�)*��p90ǐ.C�1�t��U!�o�1��� 99��&�<�1ɓ"Ae�Y2�T<�g~�r�(șR�]5�v��o/J��H��+J���gg��M�Փp�Xb�:O�-#�_km��+��^i[���fi W잟��l�Ϸ6;{{����!����L\a�\<���/>��\4|��~��?������;������1/OEz��=���w��q��r�\� �Q����m�W'��?��g��OrFIE�zܬ�8�Y��ߵs��z�k��{���wn�I���p�z1�?X��uE�-)F~���f�H}#��g'��6�{ۋ��s4bz���p�)'�~�ڳ��6;��L�ݎӏb$��d���Z.e�p�WѯJ�=#���n7[}��������E�H��3�Sԥ;�1�G�go{r{1JZ�)ȗ���5իl����N��O�m��K���rI�	����ZO>��^Agr�!�P���A	�~���$h�vErf �H$ uL�ZFrQ��o�2n��4:��"�ò�Qj��D��u*�����t�C �&I� ���F-D��4�`�ST@ 2`0� $PҀ����ɀ����X�� ��ېJ	f�����֝�gՕJ@���܍!=X�O��+��k9�F�5IIg��� okh>b<��Z���M�^/m�s0��dpe����Igb5��;ckjFQ2��E�u��e�;A���� k��GKDE��l��{�F����Y&���$R�)�H�$���N����}FC��]�7�l2��RPJB�n���@���$��QC\r](�1c�$+�h�9|����� $0@	�I@�i���D!H)�I�"��"%�k=�4֌�􉧀X;3^���)KE��3�J�g`J�o�Vlj�ę�SOتcIs�ee-ьΣ�L�Y�[��T+Z��H�!��
�e�v�[#6� Up@�/��-1(s�I@�D��j<��.��r]F�sW�p�"X�VB�$mҔIT�Ĉ� ��A��ꮢ���mH�;��܎<h�D��&!I#$��?�I���*d4CT4 �Z)1DIBh���P����Vm�ՆR�M��A�3p�Ed��i��q+N�r��,4Ć9��MU��&,z+u2풻tH�)�\�^�.�O�ꭣ$��Tr4!F괢~D�� W�:�l`�W�D����y�$�"�4��)U�$��S���&$Mh-�M�Ŗ�I�
�$j�7��J��6��EZ��I�HF���������(O�g��q��p
J�$��Y\�dhT�d��S3#*�Z#�{3��5z��kp�%��#6��R�a{"�m����i�b!��Su�_�A����D�O��M�	9��$����*��=�{�6����rd���xu\��KW��'W/^�o^��3��\����V�Lt�yR�i���x�2�LM��)Ʈ��~�(Y��³�?TƊ̀$DC��
.3ҙ��87 ��D
��0T�I�3��r{��_��ZȐ�c�P��E�C��S-1'�� � ���gu;7CaМB -Y:p�	�(�i��-�Oc� 	�v�h�ۮYӍ�(�#�TA�Ŕ�7聤U)�/@٠�"�ɣ�Ǣ�Z�����,$�hި�n�c���GU��H":~��mTm��҄LA�9���m��-;���jR�U9^�0�	H5�B �0I+J��۱��9��%����t%'���y^Spe��=�-��ߐc޾��uxn;�3}��|�}����s���1�Wpl��6v�}���}�����s9�ԉ�F���e'��]~}�է^��3�c.���݊�����ƙ�?tr&���["��b2p$�(�W-���uNO�JݛwF��10�r.�_W�K����>����l{�M�'mr>��]�)RQ��X=_QG��M���nDZ�H��d�
��.���'�~m/m�r�`�Ow)��?X��yE�b�ە�����^�V9�o�6W���X�/F�&{��-��5�#�,ԥ�j''��=����`׌��n�a�b�>iyXj��?���<�=���n܇-�n6Wλ��B"��P����%x��\�OY��y?r�7g	[�̘5�,�P�K��������N[efN`�݂el=#"#S�	٩�6�'��q2��pZ�W!��YG�eWc��I��Q8���f3��(��,3\�x4���pRr�7�-�l��&a�&��$_g�����7Vv��b�T�)�|�ܣusc��2"8ܸ�OP�*��Ld�_��"�ɱ[5 ����(��J 2L�#b����@�	�˪@�	&]��L� !� �� 2ɓ(��4<]Jl��W�~Fv8��<�m\�=n�� ]��G)���[��j KM 1�z��y:kd���i�~w9M��ze�O���t(G��錳��(�iq�����F�۶cR���I-����Ʋ?�rM�dx�S������v�ao�ө��5k�'�%���a�%i'e\��[��z:��-�����Ng��H��u�԰J�� E�Y-�9� ����&Ī'@��4R@�l�E(Qn ��)����OP��f4Z"�����#*��N$}�Dh�$�%�HE��	Z���  �|��K��[���s�ͦ9�����%�:���2��q.�4U	4�S�	H���%�	4�,��Q��:��Y֐f�X
H|M�	B���dN`9�V����Ȁ��1����C��)r`TY�TU���Qٲ�`�P"�F�@��0�Y;����&��L�:�	��p0�Dܑ�8`,�K d�@H�$�CT9c�؏�UDUֵ�H�n��+3$0P���\�K>+�]���0G�uwVF]J�A���J��;��h\�:nMZPi2BI�fA��d��EA]˂,_6��u��+� ;� �R�	󀧖%���gY�O��Z�Yh�O�U\��F�ʩ�L&ӦL��gj9cDR��`�=�	�gP�I�v-�zs�4*@��Y���n�u)<�l.J�|�����M�)���׹��ib����؅M��乽�!p��ۃ�S�Db���������1D
=���c�#�Nd|hHI
n����N
�!�2�
�,�\���2�Oͤ�N#�����a{�pU)yqv�Ӫ
D7p:�j� "��]�`U@'*�s�
Ih�7~�~��p&�1|��h[ �3�������������RYT�#���7M�Yi.�}@�c�Cw+m��8I;=�$\����d�sl�{;�\���*8�B�\fp���uw"1t���r�L��H�T�zz��#��#j���^x���<U�^M�5�� e�0��yW�(����r[� 2�H��18���\vݰp�!�J�45�ʧ�99���׈1�ZG6ݭ���Vɨ��ē�kTr�ǟ��>:���[9�9s��ݍ���#3&�%Rꏮ�<]�;�<�Gq�uz r��T�r�q�������Z�+�9\�����#6�Z�	"�,̕������a��]��gDgF0A�*ھ�z����{y�{��%X@Fr��P�r�=Ov�?���������v�b:5*���v,�]����ܷ��M�Ջr?P$g�l&�ת�����Z���N����:p#0�j��>1���ͭ��2���c
����c���}�έ��2sƎ1+�Y峨w���طC�oR#�;��g)l��Z�б)i�艦x(jK��ߵ����8�������~�Ra���=�y=� Ccu�}?��,��=}On@�cp���[C=	>E�/o@]����V%n�^�b�&XN ~��U�cBy<�Ku��nB&���O�A� s]ux<}�8[ͭ�wn�$4K�9tZ�岃�v�#�����wZ�"���c'�BP	[��c��tY7#�Ҝ�v|Gt:���KAj� �N�@�G'�$u@�W�@BZ��� �@� 2)�2�0�h$�t@��J �� 0@ �2H	)�!H)�� �_4����KgGe��eU�Y���6�Q���Z���іO{��~��m@T	��;6K�:VY��k���|o����� F�4��vvy=��:׭��0�,e�jٖ�r��p��?��w4��:��p (�s[l�n���Xg�x/]�2n7�ed��E����Z�H�z�s L���=IZuf�G�حZ<�Ò̙,���8�ty��*K�(����%��A�Q4":r �<�E�ࡩ(���?���e(��D�Bɞ��2�����Y�T��[�ě�;"�D2�3�'�B�8�)�R\�ħ����L�O(Ѩir��ci�g���d�k-�Z�!Ԍ�I�I��8�,�W���U%�e آ�XR0?�`�.|'W�%� ��!��-��Y��#҉���C�C�� C|T��Z�CX9
<a&U �%s.�;QIv�R����d����"���V�4��l�w�d�ot\%�h�Lɡ��}�$'"HI������<UH���=��;��L�C"<R܋Т�ȝA)� |T����͌�z2���4����nM���f+U+�4��;�OT��;�DY�WTR�I���+�]+p�FX|T�H�������eQ�����vg�����<H#���@�51li�J�\1��g�
�_�|��`�B�%Y�D��9�tI���Ơ�!2#"]RLM���UdH=2��ƬOO���U&��������w8�ۇǪ�xX;4����ry��ۻ���雗gC��X�l����+�0�@�pda�t��Y���B�'�J�'̪f����Ci���{$	E��5��%$)3f}1��9(��"L|��h��N�c�'Ԯ���G���>)��
7 J���BP`A�!�KQVN��  v9�����D�?�]�Q���D�h�x� �YBQ5��N
��4�,��N��5���a��OZ�:���"z�3�Tl��m���5�9}q�Y��S�鶛�;q�de�9t,�C���j���Cg⧩��M�f���
�{����UA�j`���s�T�UN?'��"H��@t�[U`�`����L�����˫^]���sX2y@��uk�<}�N��$Ě���#��ɒ��R3�5l�ul��ps7����	*L���ߙ���Y��;?o���u�������Ӄ�}?#U;T�����@�n}�;���66�ݨ�� ���W&��Y��ݿk$���b�����Hi��u��H�^_7|׮8l��1��%]G�Gr�W�g7�� �z�v/Z��be��^��G����Z>o��ϑ�r,nB 娚:�H�g�GݷЕ�;k�cҳ@�)(� ��w'�[%TNG{j� �\h���(�F.{�X��K�Rx�|��8;��wbDn�\���t�<�v��O��7^���%��r�kI]��@�	��'$�:<W��+w�e���x(�8�)7 �|S������72]��>��� � ?ܹ7VOW�ظgԽ��{�j6�DM��Hɘ� ]��7n��=ZZQ����}9�_�?����?��UK�f����8�[�;"ŘM��7�"\��N�l<��:�����2�L�~�_�"����]:�f�'��ٝ�����G�Ȯ���2b��N�
 �� �8i/�L`�V d���d� �c�� L��� � 8�1�@&,���` �&��Pg�� ] #f�l�	�M[r52���"��>&XS��IA�M�� �o�{M��@��%"�X���Oq�ϩ��\���4M;���k[�Go�{kq������Y��"5BD�K��G�[Q�w�^7m���ٻrMx����%+Ry����ٹoU�<N�ڲb��rh�^��M8!�o�� � |��,�u���mww	��� �w��H�v���i[�}P�9*�Ovqu��⬀3�$��d����1�tM"XX���� ���H1�i����TN@R�T�9O�,��vɋ%dU
$&?��Y�hC+��
[e��.�d� ��ڌ�#S:��=��]�5K�&7�XI���綳Uq���)�"��涌z�VS� 3�;��Y��H`� �����M��;H�jܢK�Dȳ,1?�&A�8NG��uT�͐�z����JEIYq�Ql� �8d�X��u=ЖXb��I��ЂV94�D���0(�r�c��z�@,
^I�t�?���h+5�]X�_��k�&�$୒g���#'�,���^�1Z��aP��Ǳ��*�^�	+\��LX����bŘ�u7y3�ap�Z�1X��v���V�i����ZG��wUZ��U�:��5��R˥�jЈd��M�#�Y�^�
�觊N�9��;��T��v�L��(�R�,��j�-$�Z8�iʉ=p`���1����D"D�"D���ߪ���D� ��d��$�|�b2E��ŷj0j�4��&�if5�Q�D8u�
G&1�� DU��-t�_��<�5�x�o�����WAc#�˞���bY����lJϱ�/�9�Ƨ��66�!"<F?$�a�v.�" P�l�D���\���d�@'���'����;Xz��@�
��|l��T�;|E�r��>E?�w��G�{���	�P�<�"S�/�چK�A�KD8v|Q����te.��d%G�">�8xEq�^m>Pqp���y-B�Q���H�s�gz�NPЧp	 H�������[���RC:�$�CgCk����0�I�h���q�Z�h��1�+��U3R�g���(�##C1�h�b�݀����)3�~�!������g;���#3�dFsw%.�Y��v����D�tw'Vgj�Ј�K�S�&{���*�4U9{�� T�U(�{��q'�Z]��L��Ry>[xG�YH����\�W��A�9ȋ�s��)S��y8�7NH�Frs-R9{�p��A5b��n�2sw�e)Հ��B�����Y�#�68;� o#!��_�"MENڦ������N|���ێӔ.4G��XҸ/���q0��g�� JY�4t��Ǔ�֡3�{V�6^� t���I�#����?��t[������P�g{��	2����9�˥pz��>��� �?���'Ԍ�@
�P.ʼ�yXp��q�ՎS�<m�1�;#ѽ	1�C�pZ��wCN��s��gejԄ�朽3B|B:�e�.r� �w����M��6�p`b�5�;�j'߈�:!�>�ɑĞ���.LR�H�1�+e�>��}��� ���0`.�2:e)7�'>˟{~�U�ZfN{��}��	��u��om��]�'���V�K�-G>K��0�Z��D������I&s�b{bڸ:5�iv�}[ۼ���.����Z]$���i���8�r=�����Wq�1��<�u���X��[�O�^���f���|��܋�1��W�eӮ痳_���r�-�rq�p����@�e���x�5ŏ-��m��9��wu�V��\��8�dP�!���
8�j�B�t�$2@H��dH @�&$Ft�d�.��:@t���@`O� % ���,��@@�� Yn���	j�����ٳ����bO^���x9�-�����N#���CL�Hj8P�����Y��ծ�OY��8[6%ͨzd4��>��Y��U�<g�=��n7r�3a�W#m��٫��cYx9�>�r�o�H�%٪�Uor���i��n�R�Y��ͳF��ˇug5;:���'�ڿ��,:3/בerw�A|�)DuH�[�uS�#7���ܛ�kqh�uZV����g�]<� �N�Lel�"A�bS���!�b4�	���q�@>*X��n����Fu*ijY/#���%j�X���QGe%�������;T�0e�F,Y��ԤRi
%#�hp���F���3u��e.���N�H����Ta����%�苢H�eI��`� �ԉ�Id�	�^����d���JRcV���"�#����
ؓR�y5���H���M8�f��Gt����bH�E��, �S`D1�D
D�Ş��E2\ߌhKtU�:6PwV�hj������&���#�Ӣ�z���*z��$:�N�i�(��_�M{ �m����ԥZ|�m�j����j���l_%P���Hr:Ć�LqKZ��ib>Z��Kc��yuΊ.�T C��t�d���ѮJ��Y�2X��N��~��&�5���j�Y7%�Փ�3�#L.���tV�LmV����Q{ �2 L�ע�\����\�D"f������]�wP8(ue��xđ\U%$6!��1��IՍ4]h4
���y-3��JWd!��ٮ���/��9��������%�7RFK�e�{^���/�9"�f,��vX���o����w}�����_Ql�����Z�#f��Kg��~��;�[����L��$��^���,�߃����S���r�����q;F��q��\�	�"O��j�,��[�9����s��pl���O��Q�=U%��)ob�L[�goy^@��;6��x����ǯY&��u� ������{R��ݳw��������$� Mz#��m�8�v��i�͍��k���J�2ah	8�O��g	]���9��y�[:���;�雅���"A��:!m��Fo��+�� �;�.����!-չM��w<�3p��� ��go��g��r~��]��sw���~�.�W�G/6*�գᠯ�k��u�r{�����>ks��Ix;5� ke�/��������������;����,'l4���+'�믽�u�~q�P�9������k�F����"#}�u8c0��R�2��O's��?t�s�����Y�L޾�����3����(/U��F�����'�� ]��2�Վ��C�Drc�&
��)�Q�r��A5p>6�t`@�<M�i��r���ĊFGI��/�m�k^��=�vӔ	1��1w>5SmeSrg���[�`M� �d�X:���b�rQ%�&�>�����9_�r�$�ӇU�ha}�pw���R2s�6@-�S�f�����i�I#Q��+�Z<����r[��Q�Jޫ������8U���&��!���bM�}�mPm��.�*�g������Y��0�!�@�U\�^�n���fW&�I}Q�����[}ǥ�c����t���#0jĆYJU7�Y���wv|�3�V���Dst\6=V�jϙ�=Ƿ�&���d�$��q���������B��P���I�3�?����S�ڼ�7��q�䵼���B�N�j$XӲ��ŭ�c��'�����bau��������\vg��4q�iH�c1�Q��G� �S�e�Zl�o��>+�ڝB�[1'V����kE*���s�|�nw#-q��~��p|hWO����0OA_�hЦ}�~Zu�wbA�p8b;��P�'hx>��|��+\�v�q��܉���3�X?X� ~+�j�O�ݏ����\-����e��:�t��m@��� �@~�沮�Η�<�ŵ�yNq����;"un �Q�M��"3F�bU���`�|�8�i)X�Dr�OivzfA�� �>�f������V�d�����o6s������>��{��t��io(��&gf����w��}$26���L�6�N6���CH��w.�A��-x8�L���� 'oā��]3<�LF1o1"n�D�$Sh%�7P�$��w���I!��_��@H�R�L�"B	@ E8	% p@�W�!g�E��� iL$� $ Q 5�7��FF��Y]I�/��q�<t�m�s�d��Kn�ti��z��>Ǵ�,9�ڏ��\�@f�y�4�=}^�u�����ccY:���y�,�oxGC��s�&�P�,�ɥ�N=�� �����D�-Z~�(��7o5���2C� |�i��m<M�c(浅�\�Ҍ�*Z��US3@��ĦۃD������n�y��F� W�9%�¹� @��r|Є�gU"h�I��O�0dz���D��B�(+�n��w��lP%,j3X��%���MA��f
��s�,�,˽H[Ā�V�:���d1�U�v��EȚUJ�u����KbXH�E
�80>D�����J%3"C`�y6H�� N}�֦[IwV �c���pȂ>	U�wK�U�>+j��سpTf(�d��I�$��)4	�UT�(�芤�� �[�+vIE.�H���� '��S�F��!6-�?eQ�B�M �8`���[y�Y��X�N�����1pk:���I�x�s��� � �%�~�"4���iDe����y0�=ٗc�8Xݳj�[����䊰��h�]	�1%/8g�Yp;�Ɖ��/!sR~	�r �0�E�)%�i��R-D���C��Ҕ�Z��fʬc�lM���p^m����d�Z�' ���WXBpؖ�?P�EM����g*P�hέݶ�V�vA�0�$�d�)cX z�J� �H�>Jj�6�PZ7���$zCSS3�7^�P�8<�9���\���� ��� �ǳ{�=oS�U]�'&�mm�k�r6�DVR"1�εv�'m�/�p������ˍ�m���cr�L�Js-��62���Ass����qC�s���;o� '��{ؿ���$o_2��g0�X}L�쭫�� ���}ع���!�'��lp�ny}}��/]#A�+�� ���W��pu�{W�����܍=3&�3  ��힍=4���ہ6���.M)���{��h�$���b t���=���\�m.ȁ@�%��j있�n����%��]�:��6��ݐ���
�ɵj�7=ž��^i���"�V��wu�5C��`7"��C���b$�4M�j���u��(�m}��Zѻ�� eS����&��L���~ő÷��c��}���w�rVy(NO+��!,OՃ2�{]��;o�}�<g x�����3y��8��zI�UZ�:o�qb�\a�[����v#(��W=��v���D���H ��P��/��]�� 5B2 ��"i���� �8�i��� ��� �w^�=g	���ٛV��c��l1���6�S���[��N��99B�靦��.R2''\���:��V粄ln�z�.Bv�\�@��GUv���`�x�.�$'ٛד���}=.	"#�S�Ҭ.�幝���Q��;�-����W�<~瑹fm��@���%tQI�l���������M�N���v�&����3�ϙ���n�f	���\�A{I���r��Z�D�3�z-����I�� �	�Z��L� q�ҵU8�ӗ��Q!�O�UDa�Ǘ�.1���+d�ql��Z�bC
�����4CUـ<�� �)��{�i�j[�~��;pN��ٲ3��4NO�F� �]�0� OJiۿ"�r��i�v��֖9�Y�=�z�=2&c+3s^&C�;.[��OO��ɀ>s=@��%sQd�7<�ّ�� ��� ��<]���ߖ���p��3�gY�{9��ؑDh��+�W�'3_�>���Z��en��{an���h��๯\�߯��a�^RGo��A�۟�Y��:��?�Pa|3�z��n���]�b&s�C��n���-�o_������l�j�.� 5���|	�V�T3ռV��GC��Ga����;0�z&��:(i�)D�o�xn�\eۛ�礟Kjf���_���?l���iT���s<���w��������f#�H�*��Wpg�U��pl�ͦ�l�a�] ����Ye����׹ۓ�}����uko�sjQ������V.��^�x6��˳���!~���|����&��8��\^b���3�ք���c�á�[U0ۭl����w���&��'\n���%�e�t8ӝ��돧3��������F�ojP� 1���^=�	���+2$���E�+1:~,2��E��ciGQv�@b��&4D� �	�@S�4GJXɁ@�&�
�2 � D%@��66���` �k���Ă�`V��ޒ{on{���P�EAGUnI׶��>�쿺��-O�%�5����'����}3k�[��Fd�D� �m�#�U�&k��pY,��ȭ:#�)5���^���KT,���r�!��(�R��������ڧL ���I;:��@��,VnbK'd��'�ZA�[j�ֵ3����֫,,:����$f��  ���$��� ��VF�%J�u��Z@���R������T`^5/�G(���rԽW|W=듡Y@�`
,H��#>�K�-��,k��]���Mh��{�,h���])m�7p�� �N�a4%�g�;1�[���l��i)��V5��5Б���r��=ؚ�TR�KAd79�wd,�@��� ֆ�!�X��V  ��1�����R�L���I ��Hh���d��]��1Qz��Q���2�8W%�dYځw�n��՘�= �B��%f-��7AV�V���;,z�۶d�US! ��%U�2�� ׮*-b��-�Jx�FE����v" !'���cD�ⴉ ��4�Y֝$re���ِ�s�}M�W�vW�vU�.��v�u4�ۊ-]��,�z����� X|QXAa���6�E̨|Vrj����%d��LK��Or�3 ���H���[3�L�Q�"=�t����a��
]���.��H?�k�*Hؚpr��JE�vMO��/�ߺpvz~�9g����?���$%��	��9��s�XG���^�vl�Z�6�o�}췼���ˊ�� �¾h�6��� 1^R�VO��o���~g���`x>6NF�K�7� ��qy���=��rw�ޏ���O�{c����l6�z�{ۻ�Կp��rU�
/6�]��#֦�O�Е�����g0�1�h�"J�z���]�!���&RfY[��B/Zd��&{փĚ�"KO��~Ԥ	�����ZpSI�s�;X4��`:�rzT����w��/ABV��V�Vy~O�dJ~�1z۶0�n�����I� ������K�̀�-N+v�m}�{mrw$���F2|����쨆z;���v�o��-s���D��G�Q��� �ɕ�o�?�m�%��F����n8]̚O�Z�)��Z+��g�~����r���l�ͼ��gD�Șă���S����Xf���)yY�EK��������l�{�M�P�	H 9X�GU^ſe{O���oxgl�K�:W�����e���nm� ��7���$�n^L6^��plr�p}���#~� k	�m�P�������@����3}���f���ep6���c}1�ק�L��-mw�cmv7l� �p"T>�a�ե�c����\a#�y+�"��#��ߝ�)���FKj��o�e�nl\:	���9]���x{4�d�{���dc M�Rc2?D��U��Ӈ�6�c!�%	}Qc�Ӣ*��-����2�����8"�{wI�t���x:UAm�y�\�1��N*�T�0�'$`2�D�v�n`��:0>g�Og�-� ��n�2�1����m�w>��Ԗ����=�s�������^�8>w{�����+[�V�:Hd�c��ΎF�Ђ1�\��^�=g���3�E�����M? �����r�w��6�:�� ��<��&m����� q������)~&+�n[�q�8���~j�����+����GrҕA� [��eduj��'���g}b��6���1�ď� r=���)8V�kѼo\p��m��P��iS��q�>V�����n/l�����%��#���d���ͮʶ������ە�ً�p�-���|�T�(f"ۏ0v=�״ѿ��7�/'c����֙�Q�F�ɦ��Y�'���y�!�+�r�t�`�[�[80�/f�Wڧ��ܶS�<��i��r|h��$�֭V����誶~L����)�rg��=.N��� �j�^�ɛ�� ��������!kzo�N'kq^=��Bՙ.��$qϹ-�9	[�l�<\�m�
Vq-�Z��o�����y#h���S5���'�[/��No+3�b�"��?u�M�pl���<���ޘ��������T����s��"ݩ�~�Fmg"rl���rZ�A�cEE��R2 J�Q! �LM�F�% ��L$�d��� @�L � T�HY @�!옑 `z� ř�Z�D�@<'(��Cd�&tx�ou��ۙ��U�$=~W'�=��Rr�Z��5�	W���-�����v��p}�g�q7c	m��r@<"kpu�_M�{t�[�ĉ�
�PXT�;�-�����$�sR�3����lgnT1 H
��lUm!���#���*l4z��
��y���跫1cLHȶ�:uQբE�!1�(�j,�V ���:�#�Z!�.�[�UQ[�ϒ�#�h��y+�:�W.�S*��r`nCPg�Tupe��Q�1b��͞�Ѻ��%�T#��?Zu�d"OeJ���7Q'6�(���/��R����"��	lx�$>�1�����>+7R� ��蠛9#|��j�[�ēN�Ґ�CQБ6a�V�'KS�B���l��"�6�"�\/_��صB�`��h��ѩ���iJ����=����Eb�v�C��=Ȫ���n2fG�oX����.��/�uD��[�,�W�-_!FSwqQ-�EC�V����7����q{*�m6�x-�C�X��T-R$` 	� �Ƙro�9���7[O\�aîk�Y���M,��`��N�W�a��,�0@��l�$��Ͳ��E��em`��A�.��5��թi�Uak"�ګ��P������W�#.�c�����i���|��U�u�1�{9���l{sna� u�^s�8s;���z~�����ǳ]Ig'���[�g��v����8�\���xc1�9�gu�몭k	y<� Z�.۳��˅���7�-��{�H4a� ��D�0�<�����e`�t����&ߙ�IĮ.�t�==E� kP�,0��,�T�E��F��R��g��R���SL�X�q5o����#=� H=���S�=>`''b�	�˓5�P��O�#i!��q����� qZ&�Nn�f$${4�(ɵQ��q�3�k��V�k�L�jbc�"r��U�v��g���M�������+f�!��WW��_E���'�q��Kƾ�	'�d�e������}�Ǝ#ݶ��zt��H0�X�7	��4���Us�����ϲśޠ����o�_A�ď�/�䪯��~�S��ۿkֱ=p�!H��ˡX�poM�M�or�;9�	;X0Q	�K}��8��(��Z��I����uj��<X�|����'ovV�6���lKwu������_�C��d��Os�Lm�����t9tݘg6� M[�P��{�ݾ�䥴�	��e]���!�ҷ�+n:�����}��+��Q8i���Y$\�54{=�tk�8�șB"x�љ�umi����^��"!2�r��?%�K�g��'��r\)��@���}WWv�x�tA�w||A���������F����QV�$�<��@[��E�
r��\�<�; ��D���5	8G���{�k\��w�7v��%@H.����z��U!�������� ܻ9:��<{��1�P�"�������s}��Ii2��z:�b�^�.{pnO�����#pG"[����d�幋ҳ���" nh��:b{�ׯ����a��kj$��Z8��"�.�i�}��'.=Kz�N �$hR�ۑ��j��5z�d��Vz�V�r��"eD6������CG^����l��\|И�lu�j+�MnPq���I5���I��S��
�x��z{����F��!�����8q&1�Ќ�O���ۖ�8�@}V�!TI��bo��6$\C��$I?�}��A�� _v��q��,G�⯛7-i�p7��e� � we4R��{,�xOtF��ۍ�Y^��"_��g�F�f޿�����F�����-���������'�aIj��y3����{����"�y���K*���t�<�� };Z�`�H�11$��,��hXG��r\�n�N��Waݗ]+�ξ��*F�E�-N_L�`OI2�&���[=����K1�@4e���B��$����i���I@�0�@AH�:`M��  I� >*@�0�LP�
�`A"MNPD��~� ������ D�0����3�0`X��zI�_����䌧��*��V�
�����>ܖ�".���;�����=�[���8m�.���Į���(�o���1>I�d�]��m6��3�����j�����I�`)�I�vX-$���"
��T�d3'R �&`*P���cH�%a,�Ȕf���
��l�k�ev�_��K(�ՆY)[[�RK�%-�3b�RFbD5AwI0�/�涤ٱ�3�8&X��5i�T���|�D�+Z�B�R�� �CSB� �  ��)
fe=���h�Q%ra'쳱hh�vT� ~a)�p��JWeTH�zf�\n�9>
�IC��S�%3�u�Y5����k�&Y��I����t�4?n�MG85[�\� ��j�Y�o޵� �.ѵ��b�_��YdG�vUTgf5˞��*��VF�-q�uWW$�A^��n"����m��j 2)���M$��;-� ��=�lг�Eh͒t��\�Ӳ8d�`��I�r���Vm����i����I�,��sP�U@�BP6�
P�|�������e�}��-��P?�Z;�Č�t��h�W<�����J�,���S�y!�x>�3�ǀ�6��'��6�,c|� E��Rۯ����^�Y�iY��7�m���u��	��q�%��<۽Ӈ��K����muR+�SK�ig��8�w��R�w�� ����GE�m�kbp{:��/���t����<� ��T�5A�x��H��B9��&��1ן@�-XIE��!���b�8�O�MI�rS8�I|�y+�~L��ܓ�	w���I&ʮگ&;�[��LWl]Z�4^�~Nn�q���e��U]V���C��i7�'H`FEֿ�����wģ���3�U���a��{�]dZ������"^Q��G0_�ލ�y���<�%�y\�zҫ�������n��#zԴH����Y8�gS�{+�<��\�y��ව�y��Lv_�!j�*Mu]5���Y���Ϲ=��� �{S|� R�)SM�� N��(&�k'��������@c�Ot����w�<�M�J6���iw��ݕ��$9S�|�-^�}�����m����>Yj�����&w����ų�>�g؞��F�w(GpiX]�lb�T�?����ڹG�}��� ���O���s��D��Z}Q.�tV�ǟ������vvܦ�3�1��>Q��%a�D�w���k=�#���Y����C�0�+5y=V�G���F�H꺩)d��G���dj1�S6/��O�����nm��/\º�ϓ�Q�e�jH+�0d�# =�	0��C�Md�f&��Q�i��ԓZ�P��Fr�6��� F�s+;�H����@Q�Y`}������ᷲꙉs���,����r�(Dz7}IG&o2�_{�[�V��HP`ql�j��pl�o'-��a��_��c�4\�O���u0&?�=2곂�f�چ�,�ĭL~Ã���4�;�����c��G�FJl��j�z��2,\���0�N� R�SL�ښ1�OD�H�-JQc�I�|���7whA����Y�AV�l�q����G���'bwE��[�K�g;��Ѽ���=_'����܁����	-���F!q�� t��V�>_�6q��n݆����ꐤ���:�-�88�Jvg��v��߷�m�	F[vH�z���b��(y=�p����s�G�qkf<з)83ͨ�����V漛�r[+��#�r1��}Lr
:4t-�g?���WįY�+P[�W[��n���gorBv/���B;�Ӕr:������1���$Ԉc�2?�$\�7��mV1`~�s�`-%�Ƚ��₪f!��Be� t ̐�t��� �P ~$P]G�C�S�] �`0�� R��� �@	&D�������scs�*���߾�{'�������nIu���8=WU�O��%����1I�x��gf���N @�AӲ��m,�nw�F�@����*�N�W��t�3]�P �J�M��&Ф18��Mr;�)�-pt����a!0���Pq�b)�[���[k%�Bٶ#�8�E�*��Y��ɺ�$6�w�����@�(����ڌm�@
�Rn�H/L�B�|, ��:��T�i��'�q�]	�ǮE��L�l+���@D�~�hQ|SMg�@��tNI�I01���Ci����+ �HL��sLVwnM*�K:��z��"\���(MMʨ���)T�����	�V�]�
�͚W$�2B+l�@��J�$��elt�(u���|�l��M���� l����������L@5e��g,r �W!��|Vm��UZPC�.LgFI�uD�p���Z���Z�"��D,�- �K�)y@�6e�ޕ��v,���:5�1�p�9Ω-�������)��൘�H�@ w�l�{���R.��,���<@b��Y�v Ē��Ԣ&��K�s�9��J
�[�lS����{�z��%���SLNi+j$���D�K|A�~��v�p���{>��ood��i���Ig Vg��Zk��h%Y$��~{��<���.v2����Gm��"��u#�;�R����65��:*�>����}������yI�q�rDO~5��)���������Ӧ�S��b�s'�\��@@��bE ��##����7�-]��[��(N��g��p����;+Zٍ��5Ä�W:b�������4C��� F�P-?U`��c�g�$�Zעj�������� Gl{!���{J��ܤb@ ERRl�-�r3��V�lg ���j��np[�P��[D�h�*������p}���%e��/�7���DP`LM
қ��ml�W?���g}N+���X�X�na�uԶ����k�<#�no��Ok��W���ZI�N��ú��W������y~/yi�]�q��D~n�P���8���EĄ�|ò�ֱ���&C}I�K9�OG�?������u��8�c8ʆQz	2,�>K����=�������.D�BP/=��_F�6�+o���<���P��&��詣*�G�<��5*sJ	���Lr� ����KԵ3	ƠĐG�L��{� l���vVÖ��R��4>4��JN�~Ֆ-�]��7��'�{3qv>{�d�!tHT�Ӗ��[f�������w��s�wo�fw)8���g��ɿ��:8|X�cc�m�i!(Lk��W&j�{J���^��	L�WΙ��W����(>s�m\buulB�<krp�Z]�,���\�T���ƈ>e #�u/D�P+<���=U@��ȐZ@Bp;`���?P&Dj#&N�$zxNf{(3mRc_�j�
�'/)�2�lyE����� vNU�!B��!�žKJ��ڻ(]�K��zڒd����n���_X�/F++�z<���6ȹfC�1V� l�ɻ(�7�R7��[��+:-� L\}1?����v�<��� �m�&����&��S�x2ݥD�cre��H1��^�t�I�e{�ԉ���8��wB%"�0�-�T�'�UXX׳�~�;?��NzwD��||�n�=��{Woz��ws!W���y���ҏ�׵[T3�l.���]�ݹw��]%�;s�����.�N�'�K*[�Oi�n�c�Ѹ2�f��X�P.[ӏ_��u=z^e|�4��>�ۍ��+v�R��X��� ��.�6<g_[�� 4���E��OE�RrKF��-;�0��q�|tF���.ܷsY�9�5�7tӁY�͹��h�q��5:jA?�4CE��� 	�@4���@��&g����j@\��M��
Neȑ �ҬB��@A�`����p���L �
 �@���Pj�T��Y2�� Q0S4�v�
�����(� �Ǜ��K=Z�4"�T���O�}�����/��]����������=n�N� [��~������[xܵ~'W�p�ƶ�U��֚��}��E�pTe��S��Cd'z{�4��>9�;`�NfK�K���2�b;Ӣ�C$��e$M�%�Iq���-�\�B� P1@.�@�'G��1c�JRcE�J��%�ts@�����^܈ȃ�9.[l:��$�`�D�¿Y��H�ҷ�B�z�	�" �G�R�$dI��
�hoN��}E#���+:�����@�j,�UD�8႔䬢��e�leb����B`� ��%06y��8U-"�4BCc��2X�j��) �p&B�GP�Dc��9��Qj�mb |����J��6��t
1����	rQ��U�e>��NF�Y�������R��.�4@�=�f�	�"ER�_���&���G�tUVK,���\�,���E?DXHP �mȒ�AaV�tSk�Vm���Vqصn��� .�UT�݃�I�xr�2`���@�+���4��*ƈs&��q��]��Pt�Xչ4u�Y3�l��(���\���RU=�n���z$�%+���@?$먛l����������൵��]��L �N -t�n������O5�OwnonoGe��x����{�^�5WM1������ ���|,w�a�ݷ+;(	Z��)(ڗ׹�#��/��&�{����{��b;�0�v@�� �AP͙�I��4mJR`�l�&�	�6���9T���mMM<��=������ ĕ��O�����h��p8#�	)3��  	2��ԶiԪw�m��%�:�
P�ڄƧ����WF2S=�D=J� (l��X)&,�e��"��)�Lۈ�����*Dr�D������0��"�:9����7��v�o&nj{�MNJР�|���c��]�?M��?��]r>80rc��m]�r�[w-�$K׀���Ƨu�\�Iu�˃��� ƾ{n[�in���6��nKU����P릞�x��Us^�s�/=��F{[o+7`[Y�C�%�]�J�ӫ1z���ջə(��U��d�ד�{K��;{�������&�� ��|�gm�#%U��r�m���O�۹;�*��6weI���L<0�ӦLݲr��-�N�L�K$�LS��*E1��!�_��w�v�;���n�I8��.����������r@3�vdU� ����o�>O�#op��"Cەt�����V����[^������v����H�8�BK[_����]C<=hJFA�$��EW��6��7Qy��,�s�d��7�!�Ϯh Y�)Ha  ����0�]?� h���>H$L��PgT�Oҹ��:b�؈�찱u䳑�!b��u���u�f�X9[��Κ|�-�Y����f#����:�Ο������3��c�EѮ�E�A�Z�;/(Y#��cTvm�N�b�� m|�$���T""qc*�8�؍4.��	�.�w����ۘ����gU�X��+�Z27v�Q1"Qj1��s��<���y��nٸa?(�X�A��i&�WmF��kB����i�޺	�g�1p$G_I�f{?nnm��.B�#���cP;2�YߣdT��F|�o  �A0�Mh?U�o5�OS���#���U�mf�H��_S� ��~N�[cNY��������cl�\qx��N���Xk�[�Ƶ���>3wm��o0v_I�9�j��ްX!j��m����� 0eFE�����/J�2�&x��K�ՠ�Dze���Ǫ��>�y�nB��\M'�V�!��2����_Tc��U���$��_Ƞ�g�)�d�i��'�`H�� �  
`�� + d@��0��BD � 2G�b��$��Q)[$�0��JBK�hɲ�Ӄ7c~����	���3l�q����E���U��o�����6�6�m/�i�E��(=Z�i��j�ۍ��y#�1��>���k���f�����F"30Ύ��\u��.�3���r������!��(�*H�#\uƢ�HP� �$�
'�	b���t'�P`����*�u�!�d��u����(k�]��W!ܜ,l�cZ����ZK*��t�E��HN������*�W �j_#A�*ȷ*�S�L����&�e3������Zxg� �'�0uhh����k����|մ�" �薃�e���rglb#�� j�D @ �Ԅ�bQT��(`J�&

N�
��VMV 5J�Z�Ԁ0�i⡠�8���V<�yX.;�w颀lnŪ�A�O�RK#ء�=�.F�tk�9v3CQoȆ/�B]Zg�*]$u�\0����lȖ���.k�5�w��bZ�De�ؔ�X�!s�I��K�)�c�)ਐF�K5z�lF��R�0ZC���ȑ%���u�b��5%�NG�B�ðt�S�H��o�&��A%��5�5B�LaP� $��ˁ��Ni/�ɓ��� ����irWv{9j��E�z�q�1�D�B�?����ϓfʸG��xI󜭯m������m�}߸��]����5���:}2��U�P��-��E/����d�;���5V"���������hI+JQ�-��S���m�����5�������]�,�bjI-ձ�Rr+�d�F���*�o�/+Wrz[#�]�r��H�\��GR��p4!]E��$¬���"-��
�� �)����l� �P\Nz��$i ���R)��2b��0��H�q	Z���2���#��蚁��O{�m=I;���`���L�F�̥v�V�:�P͇UUi�99������D �:ji㥳|��Ӝ�lM�r��8�R�z�ר���F$��їK�knNg��Bs|��������nM�����.ꩫe-��[6k�q����w|�R�u����]]U�p��<��-P{uR���@&2 ��%�P�K��ļ	�G�V�ZcH0:��_�M2��D)& ����0H����L�h��;������d�0�N��x��Pǣ�EYø��]���A2b|Vf�=��1(� �I/O����T��g�G����nG��0��v�	�0.i��:<�ws�����-2��k
����ܔ����]K(�fX�B�����0M0k����D�h.��i�J�\3�v���r�D��"bs&�e�pt6�:�ۜlo�׭� R�]:LN,@�b���C�a�ҵ\����� v}	[ ԇ�E!�U�c�s�Y��}e�<�g���3�M�&tܧ'C��������x'|�9�a�.0��V�k}4��x��+7�Z�	�(�#��[����9� ��MD�1~�)���ɣNӐ���8��+���H9�u4V�����.�^����KH=��p&�N��\�'�"nB�͹�`�H�Ѧ�ʶ>���u�9ĭnm�����}:�D��.+ih���ux<׺��ypm��1�x�C�ɼV���ͿZ�x}ōś��Z�L_�:҄-���L[��֕��;��դK/�8\��%��e���2W��jf��05���ڐh\������G;qnQ'Pc�a�+bL��K�%F#/���\��B`� � �0( �&� G� � �6�*$��!�rB2Lb�P>H�#�d��ⶾ� H������'����~֐����VE-g.����?�t�]*�p{�dF��sj،��@�b�ܡ�����q�#f7.}qf����nO��:V�����v�8�u���S�1��<FX� ��� �P�RI2@���F r �y,��ؒ`: ��Y3����j��[��?��)*���m�o�Y:~���kH'��v��02=U�&s��G�E�*E�1l��!QC4Lh��"�� ��9�J�^J4�BF͖ڈ�WUvrZI��2B|�`�H�3#�k4�#�D6kZ��tI�d�L�8* ���F�H�l�� t�E� �rj ��.�A�?�r�uc��L�`�����������q ���%'V��W��QMy/clߩ��N�y��%�Z��R#<
������[��gԇR%���!�4K!(w��� �wU"h�r$��-"�"�L�M��4M�>���M�8�R2l�J�d̊�N��;X��*L���@)�I�Ce�R.��k���^��"$F�VՌrx��^��Ŏ��<�!�J�ggn\O���|W���߱��ɳgT|.q�m��ݷ�{v�6����RY�D�L���T#-:�y��O���l��7���{��+�?�qp<�=#�_5�n���>�N���2���s�h�(�A�)�7��&����0%kMrsl�(h�h���#�rWz�����Ҭ{�cL��<-���?����F4槪Vd��:9���D�rA�8��4� ��:M%�JEIN�tD�<��W�[�p� A4��Hm[h�4������R)(�� ^$�L5H�|T2Qr��ve;p�8yc�� ��kq�Lt���!�*��)���q�=Π����g/w�F���ܤ�.Pi�=�҉�+�� ��� -b���ٜ���� ~�w��WN�ޙ3�k|/�w���������?��G�j���zz��nO3w����,{����q���Gym�.J�e�տTr��'��6�e۞�9JЬ�1猅I���J��-ؾ�uX5��*�i/!��j�= ��ɕ�_��-B��;P���`
t@��V1H#�����D�iT$9TI�� M{f�EH
IO�R,ڷ��?1_���\�v쀡59��*��7��ר�gWle�J݃�);���jɀ�[��x�_�ao�m���D��i���_�R풺��r��FY=E3GP�����=��^����F V?��Qj�V�.\���"c��3#0�p���[��	N�>�B@f��2գ���yK�;q�`�vF��ٮ�Gx��f�m]�i�^�r�����Z:����NJ+�w��9���S�z��bcBtW�r<��GF�ϭSmd� ��������ҵ�kR���%I[����	�8���������lD�$hA��e�YކԺNQ��)]���!����z8�&�Թ�Zg��dy���om`شu��&��;t�-kc�飇kyotL76��bH�5�E�l�A�v�[�;f2 9�:�FgagF��gX��p�d&�;xF||���	��2����9��O�o��!<
� q�Dѣ���� �4�_�` @� �� �0	�@)�0#� �G@�p��� $$&&����w&��L�Z����p�����|AI��d��������O�
X �'�R����Q2ux�� �C8������;6yYi��LH�%�3ҽ��>g�Z��>���ɯ���(���(��)NO�l9���FL"��^+ʾ�=�ZN��̯��;��.v�u>���t��(���	N@��	d�d��q@�n��H
M��RWvqf��̺�Un�ph��� ��i&P,�����E�@S�B�Ƶ�F�$2Ί��Y�LV�f,�ƹ,݊�Hz��s�]Q-�7/�CA�
Tx�T��$�"	�d*� j�2�h�
|�̯	॥%d�>j�&[]HcB� �p�(��U�
2\!�;�А����!dfd�I�]�#�at��9)��u�4|��ֵ3c�A�E��8ꢛVB�V�e�ԊV*�I��R��e���Gh,B$� �HBֹv�q�M ��Ui�Y�uc�;Q��Kď��,�*�-,Ez$�%�3~	�� 9�D�[��O�g���j�kY���ʈBh3��d�RE�*�H1��HAN ��O��g�D����h�Fss�W�����յ���� �p���V�4K�g}�����{��=�=�?�n%nǤ7\��Ѵ?���GM :�eƺ$���+���=��&� ������m�vd�=��#� ��c�͞r��=��~�� '��k����.�Ծ'5�apvY��x`�&����G�(�ݖ����v�:"CV�^�2]����&���↊+�&z���� ꡢ�"ZK��=єN%��iA�:�+e�>PK�r[���"̸�$��h���tCc��S�S2�J)L��(�-�y@BW#!��I#=�����h�WI�rF��@&�p���ܽ��p��Hx� (9&�+S�\���t �a�M��U�-��nN�x�ځ?�]
'ovԍ��K	~�$��r�yS����H���tk������<��՛��rԭ�ח�Z2�#(�
����ǹA������g������-bԨfq��1���T�{lx.j��{nr��Z�J��Q�yJG�](㽤�ܖ�ѽ!f@� ��83`B�"���2d���̱��(m�j�"܆�ҤV>���	f���시Q�R$��?�`!����4� �~2
!��I+� � ��(�lT��	�s��]��F����/�͠��N�M�p1�tȨ�4�����3H��kl#1j{�DU|���mo��D3v-Ӣ��U��m�憦�"�S��J��W��{��[�n�aPY�n��(��<��<>�՟$�-�ճ����D�i?SU�JM��F���ͤ���2�Qi`O�'+ZD@ ��bqZ*(%]ɮ7�_�mݎ��HM�G��,�riT�\�ݿ�9ۜ�R_�d�.�9�n�
ğ<*�WVej�z���&`���Ѳ`��\��+r�4�M|��XG����zŭ���?��bX	G�2cz�������]Q���6�bD��>���6y9;�/�^Cҝ�~����N�^N{nvVckֽ#np"ܴ�X�$A��HHͣ�=���8���)��S3.�[�����(됍�D�:i5��iN~�Y��2�na�R�*$AY��8�\�,{b�4h� ;�0�Ɖp�Y$B�� 4@H$d �:@B�q@�`
'����X��2?��]^{�g��紱��m�mD�\�*��{Zy>K��c"Yd�3'�J��2d�ks�h�b������:�k����-A�=�x[<�!l]��t�X^�t�kA�ھ��,�[���i�T����Y��+��GF�,�f僢8�������P-�����1��NM�Ϡ]ǁ"��I�)ʄ3@�H(h` � �b��.�)U�n!�Zz���)S;�LC�ܚ�-��Ej��I�,�"^*�ɛc�U�$�g�=��,h�d�Bm�8Hw
]
L]!��!�$	�J$��a�&&H��J�9�2�����R�M��� ���_X�JQ.��bE�L>��Ƈ�}��s���LC�]���d�!��)�#�K��"z��T(�WQ��V�[��eA��46�
ע�tLȸŏB���L��rY�H�d�_%i���B� "���L���	�M��P+�sQ#�
]��U$�q�bH�!a�S0h��ҬM"1U���'r �,z,-dl�� �p�i�բ�~��UA��Ĥ�)*1i�SR�(����%p��B@���VvI�'���K�]�5A�v��(��R�C���3�\��3 +��%R�ޮ���嚪��@3��A2�� bJ5�oS�v=߼�1{R�v��m�|�g3����OHG��}MJ��rY;���+u�r��%�����9��� � ��~���cr����Z�⏾������q�8�{M��ڵi��į���ݾOUq��\�vR�6azZ��+թ��ϻd(:W$�h��aU��q�? ���!_*9)��>:�&E�����"�[�hb>���K�*�W:Il�l�T� =1&����1�d�2�D��5����
�H�$14l�e$��G͈._2�U��,�$h��_T¸Ev���Y��y���M<���w2����M���l_�Jb��d��9+W����hD�:�S"����cܭ�z�ș[�>a�cߪ���ro�[\7cj�`��jĎ�RΎEj�#��������a8\�,D}1���z�wK<���ܖ-ޟ�"m]�I���Y�Wmry�����om.OQ�}:��I��M�Br��Y6�QM�GH8�L��UYTeGz�mݎ��(%�DrZr�!-@�i4CP3�SN ' �=�0H֕�(.Xb�`� �7T���\ =P4�"���%P��F,��3�6��10����ݽ+ޜ_TcMXQ�lD�KPP�)�ĚK�eX-	J��
�J23�N�m��np� ����8��շ'Jx��,OTӮ˰�V5��`�&���L�h�	o�f�V�Wj���W	���!�� Rp���k��7hD��N-ӵVn�#5;�wC4���wN�䖊E��� L�&R��`kV��%8:;kһh\1��� �����V�4����V��,c�G��UWYNL��oӌ���pOC��+J��ə��i |�K��rT�\�odܿ��c��^8	
j'�d����J���!�c� �Hg'chfk�.>���]���?*FveR�B��[�5ڴ�~�8�$Oi3_������G�Ӣ�~�L��8�re_�Nc��b܈��άb;�D���q�'�$Z@��m_�p5Te����6�����LiG"q�8���������g@�$1� �T��P9��A|P3F�u;D��Y�F�J=��u�/��sp)�����9ڱ�w򎷉��VVe�x08&�3f�x%Q���,���*�]N���m�#�� -#���k&Q��7���7�����-ΐc�%x�߳k_�=�W�T��뎿��p���^}�;����w��jך��P�f[��vwW��NY�C�|iF��+�g��`i�S� ��R��
 9�KwJD*Es�������W ���f��K�q��-��1��[0`��`�bH�U'a$@h��"	�a#PJIRॲ� ��I� ��`�8�p	����B�Jvqq���GWp�A�H����ح�d�E?�JZ\`ު�S�Lc��t$d��&Jr@j��%6��.[�=�XڒkV4bV�&�D�$�BX���4ES��z�u��R ��f̎�uD��	���.�L;&���!Z�+uG!Z	��T��[����9XZ2�L˖�5�+I��� �UЪ��x���JѠD�
]D��*�Xd���$ � 1w�C���ar�D�K�
�ڛ:5�K����	�du���,�keZ:6��r�uӴ���,��U\�"���˞և���%��0�~j��Cگ�I�Td��&��%�k�K]��DY���Ȥ����M&E��U�p4 ��G��Sݏ�.��U�rpZ�m�-x>q���W��|'6���1>hX��|na��?^m63�h�#�\6���緦��ۙGs*�լ5Hg9K����6:�y���Ժ�=wُk��p��s�nO�/c^0ڂ���O�K��7w}~�t��$���6�o#F.�T�>(�+8;;[q�l["�K�R���n̟�.s w����͋փ�$�2k:@�V��Pd~R��L���J-�r!����!\DJR�$�D{�
Y2�}q ��L�Q�tB/��~[ozZa1.�b��^�ev�"XŨ?�LI2��&4	P��jYUL�o�wlq�^�@2:���rr��tl���[��wo/�}31Zl�j�����mo,�!	ژ���Ҿ+'Iu�#&�gGU��zy���=[5�m�����ݜ?�2�Q�FL\���^�mI<O?���v�^���p"��e�d~]�oV᜻Ӫ�����h�w���>�%'��G�
���|k��A�}�Z����׸��Y�@
K��^���l\�ܷ��͹���?Y�53��v����y�_okqn�(ȟ���⭣+3�o��l��Xe"�n�7�i�E��R_N,s
j�uv�K��A"��]��$`q�$�XbX�:��Ԗ:L(j��"�����@C�i�C&E1� c �\;`�A�P;� @46s�9! 2r��QHap�:�m����J,�"14��r%հ)0F�؉�� ��|�Z�ďwc�f8��?B]��?�v����Z�ꈍ=(�5������2	�����z�����]�?���":���À�K�����/�����R�m�Ė��%����ws��F�B�)C��Bm��r�fО�G������L�G'���\��C����V���C�V��'v����l�����,|�ؑM_0�9{x���\��+����	����I�Y\��ڿ/L������5n�V��&�%�����5�$y��Bm��G��:Ƹ	i2�@pX��rw�S�'[wW�76F1��z��i�>%��ruBj�y]�&-J���A`��Un��%��[�W���X�م�S0x(�.9�$d�FDC$�)��\��",�ZNfm��n����P5S손�	Z�	SN}��V�,��^%��ˢ�4LIe���@�@n?4_d�D��2,�ST ��@��3&Fd��� ��@�/�~Q�Rpf��u6jm��X*�S,#t	�h/� ��er��s-�I�X���ؖ����	�G�B3u����؎�K֗,�f�w�O���4�t^e�l�טG^"��	�O��u+�ғlc�FB�ҫ)��h�8�&�#�x��3h���x�&�@!����,P @��� @��Hp���殂��tɭv`�ݖ�!�ȳ��(:�?��0h|*��ƾ*�$	ҕ����p�3x�*�l��u��C1hpE4�l|�!6)6�I@,�/�P�D�~%G&��Ƙ�X%��r�C��C�U�ٖ3��� �A!��,������}1����c����,�Q�,��4)#:P) 	d 7材!I?)�1bN��M^Jk�������JDd����b�q�U	�|
��h�@�r4�����B2hI�$x$�V4�w.ɲ���iE�=�(Qd��,l�\��|��#7�IpH��J��Z�MK.�h©ֹ�`�V��m�q��et]JcMMVq&���^)��]���3��x��#���v�&#��G��oJ��f�O�w�Mǹy�۽����oz���r�������U{	�Z�N���N�/�[�}��}�ڝv6�y/vnm�&P�,��DW��s}��=D�G��FݸF�DBո�ۆB1�y��:E�j؂sR)5l,��H��Ouz�,�m��S�xJ-(��K�e�e�B�"D��C��Ҁ�KX(��N	@���.�bGUH,�����JDUr� uJ��v�L�"�'�z�d6h� ��)FE�#4��#>�a��D�gHx'0U^~�chv�e ������)3��gɻ$;U�:���1�(��#J1n�A"$I�?<�>Mh�N��v��я�)I����-���Pq��g-��۔�7y����U�o[rf�ű�.Ganfw�^�� p�ēܦ��p����sP�،o�&dz����ښeV�{kgwm-�"%���=f{��չ���9�{��8�z���1t����觶����=eu�>5�)s�����]��g��pX~��R��Oe-����q��k�l	\����>�?��X��9+���̋�	=�eϙ�6�1k����B֨��'�e6]�U�<��w5 ��-�vU�D���NY�� ć���&�&yyfLp5	�x- �I�F� )�I�P�FL�&( = D 3L���� "�L���#ԠL�&Z@���4Jk�Խ�6�ޥ!zٻ��Zȧm���@��mY���6֎��b�2/����L�i��KP�����0�eF8ײUP;�������k��iV�'0�|�ӓ�����$t�D�@m%�VMT��6�텸K��	FX���B�GkJ���ٔŸܷ. ��dTl�X�#n�37b�"���Q�qS�V�t�=�y3D��������Vtp��u&�̯]��� ���n=�l�/M5�nN���v��-��we�T1�Q�X��-Fի�q{g~&p�@xȖ��W�8<�����%ȗ��4fz2�X�4�����$czal�Ng�+W���ݳ��ۀ��v�Q���R��}H̴$�"�?q�2���\��s:D�f$�e�C�b9��~�������3�P�2n�B�ґN�:-*�h��$�$�f�'����y!�����!�)r��,A�����'$�C� i��@�F]��@��a,� /D	�J  HP��D�P Lq@��PK	����ހ?�Jd��}����s��Y7-�#*����X�kw���m�Í��f�E�"!
;6}׍�{ZO��IB.��`=QW��T�t��M�o]��2�Ĭ�4E�$-�z��ڻ������"�qE��,�iW]����S�L�Q!�D�耐2P9"@I0�SlQ�X�-Thy��4�� �$�;�8%�Q (cH%�RlPPm��b�u5��-��?���Y���Z�7䬖)�I�/� 	"�@�D�dK,��4�H�ݰ~J�H�� L��J� ������$-N� �E�R����@t�� H�
�@ H�&�A�cA����B>u|Z�p[	Q�[U�dI�1�ê�8
�B`��r6�,��Ăd�O�T�L}J�%"2�nF�E�Vb�.��p\�T��_�t��&���rI�\�Q��S#�PW=lH�KEՕ[�"N�6K��rij`�R�f�2�ݐ�I	�9$a,���%��r� �j��g�'���{��)�^��G�j��$��䴰�G�]���������.?s��o��=��Si����q �7�h���l�r����_��ҩ_�>��콿��(��5��wR��F����Yy���j��5H��J��\��\��Z:�]��>��u|o�_'��/\z3ɲkg8!W $�������.��K*�@�c���N@qف�p#��j:���Uv�gr-�N��CE�c&[�#n$Z:I:��� �PZ�_���-y� �1���e��k�Bm���d�0�����]��n[��E�a��T�L&D��]�t�2���j�W>wl6��Z�$Z�>��6|���.	[� [�����"ڄ����Jr���J�2��~
�<� /���v�V6��#"?���[^<��n` cb蘴d,�� עף��������P�ؔ�f����:/����:��ٳF�i�:f�Jy~
W2�o���7�����}�B��]�<�� E��ۭ���N��r�v��|���f�̉�9��Y��^�h3r���a��E�OS���`u+GTъq嶛����\�Q��hpn�*C���߈ \"2;$z�q�5�Ȭ����3��Ta.��6�����h�-2Z�f?��a�hD��L �lH�$�� J1� lP,�� d@ ��]1� E��8��0�����(A��n��%+��mD�8�j�%+~FK�w��ܔ�3�I�i8�mS�S:���R�6�:�ײ�,���M��-�h<����D䟒[mv�&y�n��9���-Z��\3�p^��H��X��&��I�7`��ݻp�b�ظLdF6�������ֵp�<�|�˺�rZGC������D&�i�d؅΍NO[���o���/M�7mj�_ 9��N��c^$�P�ϗ�ۈ���ӏ�r��Q�={��6�7���<�w5��dm�t�������<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>Ejemplos de gr&#225;ficos usando Chart.js</title>
<meta name ="author" content ="Norfi Carrodeguas">
</head>
<body>  	  
<h1>Ejemplos de gr&#225;ficos usando Chart.js</h1><br>

<script src="Chart.js"></script>
<div id="canvas-holder">
<canvas id="chart-area" width="300" height="300"></canvas>
<canvas id="chart-area2" width="300" height="300"></canvas>
<canvas id="chart-area3" width="600" height="300"></canvas>
<canvas id="chart-area4" width="600" height="300"></canvas>
</div>
<script>
var pieData = [
				{   value: 40,
					color:"#0b82e7",
					highlight: "#0c62ab",
					label: "Google Chrome"},
				{
					value: 16,
					color: "#e3e860",
					highlight: "#a9ad47",
					label: "Android"
				},
				{
					value: 11,
					color: "#eb5d82",
					highlight: "#b74865",
					label: "Firefox"
				},
				{
					value: 10,
					color: "#5ae85a",
					highlight: "#42a642",
					label: "Internet Explorer"
				},
				{
					value: 8.6,
					color: "#e965db",
					highlight: "#a6429b",
					label: "Safari"
				}
			];

	var barChartData = {
		labels : ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
		datasets : [
			{
				fillColor : "#6b9dfa",
				strokeColor : "#ffffff",
				highlightFill: "#1864f2",
				highlightStroke: "#ffffff",
				data : [90,30,10,80,15,5,15]
			},
			{
				fillColor : "#e9e225",
				strokeColor : "#ffffff",
				highlightFill : "#ee7f49",
				highlightStroke : "#ffffff",
				data : [40,50,70,40,85,55,15]
			}
		]

	}	
		var lineChartData = {
			labels : ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
			datasets : [
				{
					label: "Primera serie de datos",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#6b9dfa",
					pointColor : "#1e45d7",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [90,30,10,80,15,5,15]
				},
				{
					label: "Segunda serie de datos",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "#e9e225",
					pointColor : "#faab12",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [40,50,70,40,85,55,15]
				}
			]

		}
var ctx = document.getElementById("chart-area").getContext("1d");
var ctx2 = document.getElementById("chart-area2").getContext("2d");
var ctx3 = document.getElementById("chart-area3").getContext("2d");
var ctx4 = document.getElementById("chart-area4").getContext("2d");
window.myPie = new Chart(ctx).Pie(pieData);	
window.myPie = new Chart(ctx2).Doughnut(pieData);				
window.myPie = new Chart(ctx3).Bar(barChartData, {responsive:true});
window.myPie = new Chart(ctx4).Line(lineChartData, {responsive:true});
</script>
</body>
</html>
                                                                                                                  octet-stream-compressible; charset=x-user-defined
Date: Sat, 07 Jan 2017 15:20:40 GMT
Expires: Thu, 21 Sep 2017 20:11:02 GMT
Cache-Control: public, max-age=22222222
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
Content-Encoding: gzip
Server: paintfe
Content-Length: 74
x-xss-protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alt-Svc: quic=":443"; ma=2592000; v="35,34"
X-Firefox-Spdy: h2
 original-response-headers Content-Type: application/vnd.google.octet-stream-compressible; charset=x-user-defined
Date: Sat, 07 Jan 2017 15:20:40 GMT
Expires: Thu, 21 Sep 2017 20:11:02 GMT
Cache-Control: public, max-age=22222222
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
Content-Encoding: gzip
Server: paintfe
Content-Length: 74
x-xss-protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alt-Svc: quic=":443"; ma=2592000; v="35,34"
X-Firefox-Spdy: h2
    J                                                                                                               nu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="/static/img/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Bienvenido,</span>
                <h2>
                  {# {% block welcome-msg %} #}
                  {# {% trans 'Welcome,' %} #}
                  <strong>
                    {# {% filter force_escape %} #}
                      {% firstof user.first_name user.username %}</strong>.
                {# {% endblock %} #}
                </h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->

            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>Plataforma</h3>
                <ul class="nav side-menu">
                  {% url 'admin:index' as index_url %}
                   <li{% if index_url == request.path %} class="active"{% endif %}>
                     <a href="{{ index_url }}"><i class="fa fa-home"></i>Inicio
                     </a>
                   </li>
                   {# ***************************************************#}
                   <li {% if "Propiedad/listar"  in request.path %} class="active" {% elif "Propiedad/crear"  in request.path %} class="active"{% endif %}>
                      <a ><i class="fa fa-building"></i>Propiedades<span class="{% if  'Propiedad/listar' in request.path or 'Propiedad/crear' in request.path %}fa fa-chevron-down {% else %} fa fa-chevron-right  {%endif%} "></span></a>
                   <ul class="nav child_menu"  {% if "Propiedad/listar" in request.path %} style="display:block;"{% endif %}> 
                      <li {% if "Propiedad/listar" in request.path %} class="current-page" {% endif %}>
                        <a href="{% url 'Propiedad:Solicitud_listar' %}">
                           Mis propiedades
                        </a> 
                        {# *********************************** #}
                        {% block accioneslist %}
                        {# <ul class="nav child_menu" style="display:blockd;"> #}
                          {# <li class="sub_menu" ><a href="">carteh</a></li> #}
                        {# </ul> #}
                          
                        {% endblock %}
                    {# ************************** #}
                      </li>
                      <li {% if "Propiedad/crear" in request.path %} class="current-page" {% endif %}>
                        <a href="{%url 'Propiedad:Solicitud_crearpro' %}">Agregar propiedad</a> 
                      </li>
                  </ul>
                 </li>
                 {# ***************************************************#}
                 <li {% if  "Propiedad/bancos" in request.path %} class="active"{% endif %}><a ><i class="fa fa-bank"></i>Bancos</a>
                   <ul class="nav child_menu">
                      <li {% if "bancos/listar" in request.path %} class="current-page"{% endif %}>
                          <a href="{%url 'Propiedad:Solicitud_listarBanco' %}">Mis Bancos
                          </a> 
                      </li>
                      <li {% if "bancos/crear" in request.path %} class="current-page"{% endif %}>
                          <a href="{%url 'Propiedad:Solicitud_crearBanco' %}">Agregar banco
                          </a>
                      </li>        
                    </ul>
                   </li>
                 
                </ul>
              </div> {# menu section #}

            </div> {# sidebarmenu #}
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small footer_fixed">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->

          </div>
        </div>

        
      {% endif %}
        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav class="">

              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                
                <div class="zapphy_datetime">
                  <span class="date"> {% suit_date %}</span>
                  <span class="time" id="clock">{% suit_time %}</span>
               </div>
              </div>
              {# <div class="nav navbar-nav"> #}
              {# </div> #}
              
              <ul class="nav navbar-nav navbar-right">
                
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="/static/img/img.jpg" alt="">{% firstof user.first_name user.username %}</strong>.
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>

                <li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
                <div class="right_col" role="main">
          <div class="">
 <!--           <div class="page-title">
              <div class="title_left">
                {# <h3>Plain Page</h3> #}
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="row">
              {% block breadcrumbs %}
                <ul class="breadcrumb breadcrumless">
                  <li><a href="{% url 'admin:index' %}">Inicio</a>
                    {# {% if title %} #}
                      <span class="divider">&raquo;</span>
                      </li>

                  {% for datos in breadurl %}
                      {% if forloop.last %}
                           <li class="active">
                            <strong>
                            {{datos.nombre}}
                            </strong>
                      {% else %}   
                            <li>   
                            {% if datos.arg %}
                                {% if datos.arg2 %}
                                <a href="{% url datos.url datos.arg datos.arg2%}">{{datos.nombre}}</a>
                                {% else %}
                                <a href="{% url datos.url datos.arg %}">{{datos.nombre}}</a>
                                {% endif %}

                            {% elif datos.url%}
                                <a href="{% url datos.url %}">{{datos.nombre}}</a> 
                            {% else %}
                        <a href="">{{datos.nombre}}</a>                       {% endif %}                
                      <span class="divider">&raquo;</span>
                      {% endif %}
                      
                      </li>
                  {% endfor %}
                </ul>
              {% endblock %}
            {% block messages %}

              {% if messages %}
              {# hay un mensaje #}
                {% for message in messages %}
                  <div class="alert alert-{% firstof message.tags 'info' %}">
                    <button class="close"kof����nŰ����ի����U]�ȣ�᷼�c��V�kjH��c*H�D���]ڮ+��'��F��E� 0���?��}�Ԉņi���(����(��쓫)2�q��4Ȁ���+������p��X?a\���I �$�"lR�T��<�S�	5���`b��W�0�8�
uMY��Nn�����e���u��EBg+�ݭ�zq�v i-ފ��&�kc��|�����1��P��z����f��'�.K����n��8�/s)�֭� �W{X>��v�����LFq��_����޻�h��M��Qڼ!84�g'�d�q�.���v��~5P�� ����c=������m\�9Ci��ҥ{M�G���ិ�� �nGm����k�� ?��/\������8,�j쟒�gT���߷=�v�����3�O�Ձ�E�[+&�KUU�||۝��=.x�tJhJ�H��A�m)��!�����P� $�T�� �;��޸�@�y*>(�d4K�ߪ $��@�
DG(()���!�S ��%��@�R��Gb��h�p{��&/�:Lde��.�%�z�����ݹv���CO�>+�k�zZ�nu.3��o� ��?��Ld]�:Ǫ���/E��?rv���N����	��g�$��k����Q�xN@�|����E�\�� 
�r-&���\I���l����G6[�͛r2�K�r��nCU�J�myG����Ǔ��&�����B��4����_"������}�so�ͭ�� ���^�5�n3�Ӽ�����;f���Y�t��J/(�t�P��3Yڸ�t�A�~����W n��s�?�\��/'��N0x��#hZ���лv�$�����x9~��Fv������t\���p����wG��f�GP-�'�ZX*����ː���$�=+�$����s)X�( 4��8.����ST�DU�L�f�S�0��6�q��FE�F�񉃉��ҍbYE�-g�\��nT �T���GtM�˻7�}Q�aTg B�<����L�Ra��@@Č�H=S#��� �&v�(� 
��@Ot F!�0�� � �Ճp0T��h%��U�uCP�%0���-����X�s`4�Q�=_%���$�������C���D!sӃ1#�ղ�nOJ�Q���7��p��ډp&��kk�9ҲP}��E�pp�Ɍ�Y&�RJZM�Z�;"�T�����d�T��8#�����T�۪M�
X|�52���2�`�Zt�
I���$a�R�GU12I�@��|� �zU�D���2`�زa G�� � k�cL 2�j���pT�
]���:�IU$$@bQ�vE�M_,ɜ��R4��I�*3Sb�P��LMܓ�i8e�ݗ�6"�[)"�Sx���7Y%J6*S������QzƩ�E��iKxM<SD�b�,�\3�A
[5�,�vV�̙�u'd��N�Tb�tp
�RWY��"2)#���<iUU��R$P@ :�M�h>hcU2Ԓ@��$U�U.�K�ϛ{2�˿y��~�2�ۏ�j�9�	���u�I����g%L�e�Ѣg�����O���"W6���[���U���8��HIcA�<�E���	9�.�u�+ݩܸ�k)d�Ցf]~�,C� ⸓Ԣ'�/��}��m��;����2!����\�*F� *\���w���|�S��S}��C�>�����pĽ������O��6�U]jaZvr�W>FW�&R"�|+rn�U���>iGľI"�c�
 ��!<���{�;�ͭm̀5�J�Rpsn{���b<M�u���Z���8�?,d%wm�ڕ$I�9#���H�e�@�ш�>Q�IjlV�By��cD������b:;Owp���޽'�L�=6A2l��mz��F�'���g՚U��i�����'ˢRb���p�:t��0�m0��?mZIrbA�4�_	u^�����t���or���]�q׋�'">������'���}���>/ݻ9ٔ�g�ۆ��%�k0�g�z�� ��������� E��a�q��ԭ��߯����'��m� ��Ό���}-�p{z���g[�bCJ'��v���{�m��<��l9=č�!�Neƀ>���VL��F���<Ő73�XĚ7Ek�+M�4�0X�y!�4�Y}48�K4� �f� AD P�4�. !�( �?�	����D� �y%�:D�&@
P�B�� @�2Ȑ |%�orV7Q��ToŒ�6}3��X��m��>�{�?��8ǡ�\>�=?I(-��ѳ��J>{d\�H�jc� �5Y'���T3�����ܛ~��oF�Xyg	�[MR�h�K�)�O���P:wGE�j�i
�G���f��X�G��왂g��-N�a�+�뭏N�W���BWl݉{n@�#�����g%Qοj���LIJ �Ӛ��P��۶�{x�Q��|-��K� VWx��}/�;�^�������� �q�/[>i�E���Y���V����>��nl�ק ֮� Nz2��~�[�g��[�8�������;����hc(
k�j���n,%wA���|sⶒ0]8r���I<o��� f� �HW�� �*Y���6D\�����I��D�:-���p�C($z��^
�E����8������H��-�w�o'!�Z>`u3�&�@M\?��I
 �3��L	���$	�dP0Q �`$ ,�@ � D J  w@�
 �☤,�1�6w#��SGW{;76��iO���+����w\�����'�"����D'�����_C��ڼ�o���"F�W�j�=,!w֬�v�\�MK���ug�"�v�J"b
�P��BH�E"�* ��0lz&K%Rl��@�j@J�k�RR"$��i��l�?�IH@��d� ���r��5eT��OT� �D����c��R%"�b�!�p����dt�A
Cb�Ψ@$`�*
H��1F8�D�	6� Bȇ���J�1"���6D|�CH(�	�piQm���� ˄C9U�AQ���d���Xd�m�N%��C.��Ć�!��ݸ���F��H�c^�&&��ZY:C�q� "0��uā�Y( ��I\� �U-��L>	�Lx�=iT�e�'㊫D�O�{��ݟ{�rx���Dt�m��,�ɝl(�kd�NW+�؞ >K�~��bw�u���>^�2�e�{��j�����jȉi ���L�J��������c��g�-y<���ʹ�����M��۱�wnK�!���o�G�[6t�G����� uqs�@�n@� k�'\6p8���T�M�#�\֒�>OG��u�MA��FtT��_Iȍ�ׯ�3@�0�r��p���@�m�0h�� �ʲ0��" /��� 9�r��d�Ӫ\�����%�K9����ng+����֔��&�<����re+Z�vxH�꯶��=	�s�ۻQm|۹v����W����Y���oy�&����(�1q �G�[ڴ��������w��ی73��M.
�\;�X�N�{��[�gsd�nC�|��ui�9.>��Mv& =c�*�x�C>k�q�rv/�arr0o0�/cV��O?v�在潭�;<��r����]�	D��}A^����O2Ӯ���~��=���-om47�bC��U����>��8=�;�V<��O��o;7�[�#�\ճ���Ŕ�>�{b� ��ŭJ�h����2��U?��m���(LJ%�E\p;)Y7�w=�b%�j���~������E�(�!�p�0I�Q�� q� " � �:d���J ��� �*٠K�>��ABe�h�2�I�@ �hD� �5�,z����0}0s��:�p+jr�n3�4ɥ���K�[��w�Ƶ{os� �����_Le��K��Y=oE�C~���;�we/CG�r5:�画.W)�}�{�6��9�_�[�'c�X7��Tg	��;L&i��wO��~������pw������O)Z����_�G��kz����k�F[��}��^�4CVD���e�,ɧ�� �y3��}�wo���p�v��K $N��'�k�\k�6s�ܻ��+����_�̝O�X���C6�=g�4��-�;a;0����H������B�8m���ou\����n/��j��� ��	w��-����z4ϱ��g��v%��4��4ݴ�E��;��Ku������$����7n�Pi�Vd'�:d$r��_�����ݘ�D�**䃇�j�1��J��-�WI�u��s�⪹C��g�z��G���]`�Iƃ�R�!զ@��@��Ð�����$#��j�t�G_�o���}0������Bp�r�с��4���է�%`� 2�4Ti�Q!�3�� � ��0֏���� *(	 +&0���� �� O����F��@��2�RC۹��	�%��n��z~h����nb�8�tSh�#������lmΐ�C7^g�V��� _d�>���MLT�)U��a�9�nB�4�~�jk�Xg�$�Z�yi�K:�:)hi��5#!�P	�ʄ�2h�D�@ԉPk.�&��mA2`I�B�`���]2bu�Kћ��Y!$�0�ɓ�
M �"���5!����@�4�	)6		�<�n�;�uRL�haGQ$5 .���#�@�pΩ38�rF	v.5)@��1�&4��z�0��)l��P���%6�E1�Q�ϩrCr �)�LiJ�@�y+l�W܏��J�X  +H�$���A%^�M𪔲[x.���tD"$�5 /���`��!���Sɨ�4�,��c�4&r4
��*�ҐEN�(o%H�i� ��+�=��jW�'���Ƕ��{��lɡ��ތ{�l��֙��3�7Q��.K,��a��z��[������`����Ʃ�b⇺iJ'��4\�|���峖XDCyEDz��Zp�������n�p��B.grR4��*dJ�N��ǂo~�|������X�G9��X��?g#�;H\đ���8����7u�k��u��ܞ�|��4��r�.y6�)����)}_T�wDTS;��$F�`d@��#��5�� [��F'Y���P��;�)H@�4��P���;X���\k�궮�ǒ-t���_tq�8@���쨕��:�������P�V]_���LN�RM�P4�o%�N���	LP���f���\��q"���)	���z�mV>u���{�X� �b�Rl�u_��kd�g�9=䶖� $ a8��fW��Q+��o�'����c��SY��..������F�Jv�n�ܜ�Q���wi�9��O�lx�Ofl�na*e��t���<��VR|���5���v����Q:7{g:.�0��߯�N]up~��Ϲ8�q�>ge!sk���ı�O��W��G��&�� �gY���6������e�v� _vӫ�s{U� $~Y�b�i��h�JIh�d;�2V�@6N�
d\���*8��`8��� ��~U  �+FLAf8�&$4�LR4m��q#�M)p,�0H�c�e�"����@��-�^��Ż����Hx��V� w=�Ǎ������#l_�Tj��F��;Ԕ�_��w�����-�׹�#d�Cr5�/��w�x:�;D��Ƒnw���r����������*�u˲Ҡ�5cN�#j{~�)k���8�"`O�N�#"��=N���J����>��/t�3�j�o8��y�`��%��]����j��Mr|g�ޞ/����&�-&�$���v%eL�6��4׃�}���o�����櫀S�rz�z����v��-�K�����wxۄ��؉���`��[%;��۲4��;��o(��پv77�H�R��p�R$y��ؑͻֲry}��|�.��Z� �
�NNxg�~�{��8��&��<p�g�����әG��n� y�|�ۍ��z��de�Q�~���U�������|�Ebc��`tD`��1��^� �,q�F����M��,��=d'��=�r�x�쥡��̠���Q��hF���%���l9�6�چ�/OS0TuO��~�7����7{x�o<�3�p�A[��ͩ	�E]����c��D=
K�T�n��B���0#��tt ]�t� �?4
I��d@H�$05S �@�H �%�Tn�GURgr�f�JH^�"�� L׷�g���b�i��9�3���G���#��2zǳ%�Ge�mãL���ҽr��"[Q?p�����ٓ��{��#�U�.d;.M�uGN�K>�,Ml�P�Eؤ������CJ��CeJE!d(r��"Ѐ��Ch5�@ d������@)@� ��Xxų�M
F
���MS@����*O�OR$Q2�I8��i2�X$�dDʖ8?�b���.Bf>9�jCj���`\�%0PA�(#�葈IqL�P�IZ�Ǣ��&1��RB�I@h��	�	�hC(Ƿd��,]@ɔ�-�V 0�@)�ĩ��"��0�U�HM����H��42���>jII�짤��ԅ��[l����I�a�Μ��58gpp!) ��<�/�<]4���Y 9�-�*q���ƈ�B� lp"|4�H���k�3绫��~x�~X��=�l�j��A�:ꪝ_�3��}��#0;.[Z\�UB���&p������Ҡ�|�Vpv��n?y�Z�a{x4���I�Z�?�n�3f�+;=���"�I �`+�N��7<��K��-{��V6�� ٶ�c_� Z��_�t����Zrs����=^�w.=Li�5�\��uUyg&�g	�D��P+Y���N���,;�b�dL�����a���	6�H��'���K}�� b�2K�e6�3�`�r��TܨE��(o �"#B<R�ტg�������=�؋���+�_���_D�y�?t�W4�-��I����U��� bg��ﾭ\�,ow"��1�_ͷմM龿��{�[���@ڻ������D��L���sncTH������r9O�=����19��-݉�Ir4�2��Ot���4��G�����.Fƽ6�f��r�}���N}Ӯ�q�ב�[�N�՗��[�=��Y`�������u}DTj���d���X��[�"M����� ۧ��x>'�+6ɹ���2�}e�5<��B� �/w�W�hn�y ;�<����+���}��'��_0ϩ}��%�{�ېD��3�ƣ��˓ӷ[�f�G��%�H!z�_s8)�����|���(!"�v@"�
3@�>��  5LB@O`� G|�	�X�i �����H��KV	��e���m���x���X��z���#��+G�;=n��n������}͹Z�l革� �����8*��)�d3��	��"@���I��!o���k�}� �tJ��L��$ҹg/�|��'����Zvn_3�R��[����c�����b{Ko����$29�1��g��őѷ�������z=;�ґ�<~��f��.:�=����c��#v�W��Ɨ}1�Y@��4��ȩY�.����7����x]�bd7<}�� �I|({�ON�ڲx;���G[����8k�M��^�dޡ���k��u� �ɷ�v���qĹ�i{�oy�b��F���gp�AZ��e �:vO������9��Ogm�&�#fYݐ���c#��k�z�߲��O������s@H�ġ���	�$tguR����Փ̉�8��wv.w"ZD2�9FI���sv=��Go�c��"v���VQ׻��ynFߥr�&������M��י9 D����_�mx��y5[ <:�[���k��u�� 擪a�3?P�!�L�?#�I�1VP�w����r�`h� q ���?���gJ�$��F
+3�ER���M�Li�h#���@�(A����1I�f�T�� ��0(�� $a	d�%�e�l�ՁT�dd ~i1 6n���Q0 ��M;[�� \ōBpe��zN#���lܑa�%��ZNk&~��a���vq��%��Z���mux=�I+)g�����\-G��2+���N��}�ZI�ET��`�Q#�J���J����$d�.
��O�E����� �l�Yd���� ���j_ ,dT�Cj�����:���"�v�$|Cf���T���C)ݜ�$Ҩ�mx�,hsWRn��6Zə+���_� �!dY��lb��>������)�&�ə%�%`� �|��K	#䜈S:��.�@�A9$5d�$�DqSf3I?5�f�����]YE�A�*�A�d& $g�C`���09`���Q "�I��M�(|:x)f�Fkr$� ��̶h�`�Fli9�z��Tx��)U�f	��ِ5.������$`�.�G.�4 �4 ^�S	�c����o�7��p=��ݏ�ẹ���-�#�+���,a���n�Ff'N+�9:���Z���w������HR�&w�#�jޘ�l{�J�8��Y��6ZL8o�_�Qく�9��r=N/fA�:n\%���K�gɃ}����XD hƀ 0`��m
?���E�&E]5�ԙL�	��T�]ӈR,GӔ�z�,ȑ�5�%1F��@V�2Y�I�3��(nDj���[��X� u9c�%��>��i:�G$���<��ɀ�`� (��-��w�H�R��I('��mY��o��+#�58d_��@����p}hݙ�E$�y����8��σ���K�X��S�ͻ��˗e���X=_���Gӑ"��+����s��/g��n�<��=B�F�V-�Md�� �|g D�}-D��į��~Փ��S�=G�=�� k������t�r��+����):=c��>���m�Xk�� X/��OZ�V�(�6�$$Y���r� 1W��#mp|#�(_36�1 E�/sC���>{�osn���N7��H�b�E�	[��8��,-^N�[�B;~[����ks���<\~k���_�OEf���ϳ�ϟ�6�"a;W��%��ܞm0r`*�L��ɲ\�IH����
� �Fo�@+���Tj���� ?�D�2 ����X���eЉfuU3��$a�#.�� JV�0�H�!B�$�ណ�+���ͭ�9/G��6���@a�V��ӯ��y&���fnln#[w"3��v��v+#�BeS"hI�И��Dy�H�r��:E�՘� Ԉ���Go��n �j&�'�L��>�����+���/_?��q���"0������2z~���[kV���݈6��ď��.�����88~Hqҵ�<��AA*1=:���[!��?��=�C��v[��̛�2H2��&���`�{Z�;y>;�o%��}Kf@Hi�1�.�e6�5й��8Y��b�;M�/!����.z.����l��G����{s���E�/y��=���Q\�I��Z0ӵ���=o��m�f����6��������B38Jc6Yi�;}�k�7�e��w"/�X����l�n��v7.��$0$��x�P�O��z���#x�J�)r&�`P�w	vr�Z��1���8���+�I��&�!�V!�3�DqBqG�I�N)�2H��)�L�pZ1�P�En�*e(EQ��G��b�z�J=j�%:&'�; �e�E <6_� ��@��@+&��{q�].ƹ��h��J���J�%�hn���]��ĀsR�J�e� �h�Ha@&�bgCgb��|ֈ����mM�ĩ�����ܔ&'H�Z26��w� ��gq�Kip��W,������ ������N����f�y5X=M���                                                                                                                                                                                                                                                                                                                                                    �X/�M �l/�\� �o/� t/�w �/��T ��/��# }�/�91 ��/��  5�/�$ ��/��B ��/��B ˥/��� �/� ��/�o7 '�/�$ K�/�) ��/�) 9�/��: ?�/�IX A�/��? ��/�+( ��/�c: ��/�x� ��/��$ ��/��  �/��A �/�h� �0��? �0��6 �0��= �0�KS x0�%C � 0�� U80��C =<0�b� =>0��� �@0�g= �@0��6 �H0��" ~U0��� �`0�C  .c0��  �k0�R� �l0�I =q0�7T W�0�= ~�0�7U ߘ0�B� -�0�[F ��0�� ��0�k ��0�� v�0��� ��0�ڑ 3�0�u ��0��9 ��0�+ �0�mU ��0�,� d�0�>� �0�D � 1�v� b1�[/ p1�� 21�
� �1�� 
1�� �1��� �1�d�  1��� �1��O -1�� �.1�1 :91�3Y :91�� �=1��U LC1��+ xL1�s" �`1�5, �o1�+X V�1��> ׇ1��M v�1�ڳ ��1��' C�1��� �1��� ��1�I ��1�- ��1�!" ��1�e? @�1�F ��1��G R�1�� �2��  J2�� <2�֘ �2��3 � 2�= 3>2�� �B2��% 'Y2��6 �[2�N �[2��# <^2�M8 4a2�0� Uh2�� �n2�U i~2��0 �2��. ��2�1 �2�A ��2�޻ v�2�YF !�2��� ��2�H� E�2�C ��2�F� 3��6 �3�U3 �3��� �3��� U3��� �3�X� �"3�W) -3��� �.3��� �13�A �33��= @3�?/ :N3�~� �U3�6� ea3�aF M3��J �3�&� �3�� k�3��� X�3�a* &�3�V� ��3��$ u�3�� �3��T u�3��� v�3��= �3�\� �3�7U %�3�� �3�Y 84��$ �4�" �4�YF �4�YR �4�C: }4��% $ 4�	T �&4��< �.4�b� �K4�� 1P4�T� 9P4� Io4��! �4�YQ ̐4��� 	�4��; �4� ��4��+ ��4��� j�4��" n�4�b� ��4��" =�4�� d�4�� w�4�_< `�4�s7 ��4�& S�4�S ��4��  �5�� e5��� <5�� 55�� �5�]S �%5�W ';5��G )D5�x� �F5�3: :Q5�m �R5�b� w^5�s* �_5�P� �a5�M- �a5�T +b5�>� �j5��= gw5��� z�5��X "�5��  f�5�~� ��5�{C �5��� ��5�� ��5�� ��5�U8 ��5�6� �5�	$ ��5��' ��5�2� ��5��" ��5�&� 7�5�� 6�OS T6�� �6��X ;6��F '6��� �*6��� �W6��& �W6�� �o6��W �}6�M" ;�6�$� ��6�� [�6�Y >�6��. ��6��� ��6��� ��6��� p�6��� ��6�i ��6�EE ��6�8� �6��' ��6��! ��6�S? �7�e$ �7�YM �7�(� �7��� Z7��Q �7�W( 8 7�CW ]#7��  8&7�A! �+7�AW B37�ڼ �57�I9 587�:� �87��X ;7��A �<7�j� W=7�*� aC7�� YT7�� Y7�U. �_7�/+ �g7��< �7�)  c�?2���c����F7�W`s'�d�b�U��$bI%	�"�,� 2���� (�"ǣ 	�$��%J �! 	�]  �pLM|D�,s@�܈R]P��'SV��%Q,��h��a99� u��VO��<F4�Sd6]j �3N���M�$ ̪&M�.>W&�p'c��8���f$�]U����}������Z�����k��	��6����/�7�Ɋ���n}!iZ!��%���]1֙��F��4 ऻ"]��dz���5K,���j�$. �Դf��m MV��2؍�]TG+h�Ɉ� J��@����@RT����C��w#T,�mGŶ��^!���a�]�N�H����\��i������2�E�	�VA�QI�j&��|�Ko z:��f��nЎ,ٕJ�M�9��,�!C-���L�,��I��S��	14��x)�Waサ�1.�3Ղ�����W���K%޹��+�%1C� �u02��� ��"�31=S�;�ȏ�Hl�LX�B"�0M����D�*c^�YI�Z� �9�NBc�'cE\
���k)#?$2a���AE���,�sZБ�n dăp0ۊ6XkX��;.��������ƏGe6P�M6U� re&�Q,�擒t����$뮹9�+� �qY��URg�c9F8,97n`�
S����Ŕ����Pq/Z���Y�"C���{�&���d�d�j�e���$�H-bF� �5Sخ�3��ৰ��ٌ�+��Ԭ�̯elJz��ʭv�HQ�RUe7�`Y_�D7 ��6*��Y`�"�ʝ�:�R푡=G�Ed�.�;�pDH���;Vq�)�6����%���d䆁rM�'��@$�LR�T�ũ���*9-�A.]�P
�k@*�9��lm�m��������eGc�O�ۖyM��w��/n�������7cO�JpV l��7�	� �2D��A�������)�1:�:� �%,C di'cє�J�	dZX6g���V�-�T�� �`h\_�q%Мg A��_��6�P��w��@k�g����j��6��ݷI c!����ٮ�@Hd̉3M���"y�SW��2*��H�vA��1	��c�9p���tV�?q*�� Ei9�����ZA�h��Qϖ�@��Kb2N��	�e��>��F�& ���֪�A(<�7��7����f� ծ�;�xN[\bg&���Ĳ������)@Ȉ���d�!�<���=�$ZB�2���O}�߄�#�����l�%8Dy���?O�\�m��5v�>�w���?k�����cHG\�<F#O��q~����K�t~�o�q>۷�����ٙ�	�2BR� h�Y/W\߻�^���|��9?r߹:�ݛ�� �}WW�~�<� ����}'�;v!h��������#��*�{�'�}ѷXB�{���{��z>����Zg��l�3���� #��KwdF�oWĚ�62�i����������6���x�0� ��ٺK'w����Z���o��VxN>2���h��1��t7�f��U��{ݺ�����oZ�G�/�I���?%��x������M�}]<�#���4L-��4#��4č�ڔf'��C������`��n� ��a)ݣ����g&M����F�-��a�-H��sޚ��JJ�'��PtL  P�[�	�3�zwJ ��t�Rz$P+�0'� !d�	���"Ʉ�[�Bhp\w@���" Y�R��4�\��Z6GbEJ�Ȫ�B�(Hu���b�?����K^��3l�.�w�:b�S
��n�X�j�b@2g��T��kx>���en�fLڀ,|1_=�^l{��Z(=��Zb���&6V)�v¥���r��z��� D3ò���>J#f�>y:�m6f������F,�+WH(�O;^l(�Sέǵn#�d�k�ocDFL��`�@LP�R9hd)0LB�P䰘~)�&`Sn�)z�u���~=TtF��	(��oVa�j�M)� �2bN.����-X�'I5d�M�J��b�M�� :�(��#jH<
 �" ՛�u�T`�dQ6]Tl��pA*t=И�Q2I�S�E��-	3QU�[9A�b�Y�B���"��m��WRYtE�H͂l;T����늚�*��������"3I�1&���D�H	�Q�rL���,�J穩�����#9KC0��Κ��� }8�plV�pc�e��vuU؈t��xG�im��+��p����K�����8�I�[g��Xz2�W&���d�zQuQ�0y(�k��8�/f�iH\�ś�QN��^閈3��CrU�#!JЬ�K5��҇�A��dE�(�[*�k�^@��,-��V�2q�|{�PS��D}!�~+i�Ra�1��8�$���)X6�k�4���r7�H��#]8�J��V�%�Z�{��T-��ƹ��f�W�G�\'׶Ix���L�)I��v)!�H�e�UQ$�,`*���g"%��&�C��?�	y!1�I��p%A� J`o+%�Ko�����V��G��e}������9Nwu�3�lX� |���:��o'�����<��HQ��1裱ܡ"0��.��)Ә�� �Hb��8�Ή��q_�d�䘚-�������`I1�&��d�b%����M"�*.�.z&U'�>mU��>T��#(|@I��d�f�/ۣ˨o�(0u��6���=:�/���VRe����lHN"B�ԑ�c�t�SD�ep���uC�L�7\�R���T�Q���A�U�:(r���ǹ�Z:h�^�pa�Dl���n�0y�)*��p90ǐ.C�1�t��U!�o�1��� 99��&�<�1ɓ"Ae�Y2�T<�g~�r�(șR�]5�v��o/J��H��+J���gg��M�Փp�Xb�:O�-#�_km��+��^i[���fi W잟��l�Ϸ6;{{����!����L\a�\<���/>��\4|��~��?������;������1/OEz��=���w��q��r�\� �Q����m�W'��?��g��OrFIE�zܬ�8�Y��ߵs��z�k��{���wn�I���p�z1�?X��uE�-)F~���f�H}#��g'��6�{ۋ��s4bz���p�)'�~�ڳ��6;��L�ݎӏb$��d���Z.e�p�WѯJ�=#���n7[}��������E�H��3�Sԥ;�1�G�go{r{1JZ�)ȗ���5իl����N��O�m��K���rI�	����ZO>��^Agr�!�P���A	�~���$h�vErf �H$ uL�ZFrQ��o�2n��4:��"�ò�Qj��D��u*�����t�C �&I� ���F-D��4�`�ST@ 2`0� $PҀ����ɀ����X�� ��ېJ	f�����֝�gՕJ@���܍!=X�O��+��k9�F�5IIg��� okh>b<��Z���M�^/m�s0��dpe����Igb5��;ckjFQ2��E�u��e�;A���� k��GKDE��l��{�F����Y&���$R�)�H�$���N����}FC��]�7�l2��RPJB�n���@���$��QC\r](�1c�$+�h�9|����� $0@	�I@�i���D!H)�I�"��"%�k=�4֌�􉧀X;3^���)KE��3�J�g`J�o�Vlj�ę�SOتcIs�ee-ьΣ�L�Y�[��T+Z��H�!��
�e�v�[#6� Up@�/��-1(s�I@�D��j<��.��r]F�sW�p�"X�VB�$mҔIT�Ĉ� ��A��ꮢ���mH�;��܎<h�D��&!I#$��?�I���*d4CT4 �Z)1DIBh���P����Vm�ՆR�M��A�3p�Ed��i��q+N�r��,4Ć9��MU��&,z+u2풻tH�)�\�^�.�O�ꭣ$��Tr4!F괢~D�� W�:�l`�W�D����y�$�"�4��)U�$��S���&$Mh-�M�Ŗ�I�
�$j�7��J��6��EZ��I�HF���������(O�g��q��p
J�$��Y\�dhT�d��S3#*�Z#�{3��5z��kp�%��#6��R�a{"�m����i�b!��Su�_�A����D�O��M�	9��$����*��=�{�6����rd���xu\��KW��'W/^�o^��3��\����V�Lt�yR�i���x�2�LM��)Ʈ��~�(Y��³�?TƊ̀$DC��
.3ҙ��87 ��D
��0T�I�3��r{��_��ZȐ�c�P��E�C��S-1'�� � ���gu;7CaМB -Y:p�	�(�i��-�Oc� 	�v�h�ۮYӍ�(�#�TA�Ŕ�7聤U)�/@٠�"�ɣ�Ǣ�Z�����,$�hި�n�c���GU��H":~��mTm��҄LA�9���m��-;���jR�U9^�0�	H5�B �0I+J��۱��9��%����t%'���y^Spe��=�-��ߐc޾��uxn;�3}��|�}����s���1�Wpl��6v�}���}�����s9�ԉ�F���e'��]~}�է^��3�c.���݊�����ƙ�?tr&���["��b2p$�(�W-���uNO�JݛwF��10�r.�_W�K����>����l{�M�'mr>��]�)RQ��X=_QG��M���nDZ�H��d�
��.���'�~m/m�r�`�Ow)��?X��yE�b�ە�����^�V9�o�6W���X�/F�&{��-��5�#�,ԥ�j''��=����`׌��n�a�b�>iyXj��?���<�=���n܇-�n6Wλ��B"��P����%x��\�OY��y?r�7g	[�̘5�,�P�K��������N[efN`�݂el=#"#S�	٩�6�'��q2��pZ�W!��YG�eWc��I��Q8���f3��(��,3\�x4���pRr�7�-�l��&a�&��$_g�����7Vv��b�T�)�|�ܣusc��2"8ܸ�OP�*��Ld�_��"�ɱ[5 ����(��J 2L�#b����@�	�˪@�	&]��L� !� �� 2ɓ(��4<]Jl��W�~Fv8��<�m\�=n�� ]��G)���[��j KM 1�z��y:kd���i�~w9M��ze�O���t(G��錳��(�iq�����F�۶cR���I-����Ʋ?�rM�dx�S������v�ao�ө��5k�'�%���a�%i'e\��[��z:��-�����Ng��H��u�԰J�� E�Y-�9� ����&Ī'@��4R@�l�E(Qn ��)����OP��f4Z"�����#*��N$}�Dh�$�%�HE��	Z���  �|��K��[���s�ͦ9�����%�:���2��q.�4U	4�S�	H���%�	4�,��Q��:��Y֐f�X
H|M�	B���dN`9�V����Ȁ��1����C��)r`TY�TU���Qٲ�`�P"�F�@��0�Y;����&��L�:�	��p0�Dܑ�8`,�K d�@H�$�CT9c�؏�UDUֵ�H�n��+3$0P���\�K>+�]���0G�uwVF]J�A���J��;��h\�:nMZPi2BI�fA��d��EA]˂,_6��u��+� ;� �R�	󀧖%���gY�O��Z�Yh�O�U\��F�ʩ�L&ӦL��gj9cDR��`�=�	�gP�I�v-�zs�4*@��Y���n�u)<�l.J�|�����M�)���׹��ib����؅M��乽�!p��ۃ�S�Db���������1D
=���c�#�Nd|hHI
n����N
�!�2�
�,�\���2�Oͤ�N#�����a{�pU)yqv�Ӫ
D7p:�j� "��]�`U@'*�s�
Ih�7~�~��p&�1|��h[ �3�������������RYT�#���7M�Yi.�}@�c�Cw+m��8I;=�$\����d�sl�{;�\���*8�B�\fp���uw"1t���r�L��H�T�zz��#��#j���^x���<U�^M�5�� e�0��yW�(����r[� 2�H��18���\vݰp�!�J�45�ʧ�99���׈1�ZG6ݭ���Vɨ��ē�kTr�ǟ��>:���[9�9s��ݍ���#3&�%Rꏮ�<]�;�<�Gq�uz r��T�r�q�������Z�+�9\�����#6�Z�	"�,̕������a��]��gDgF0A�*ھ�z����{y�{��%X@Fr��P�r�=Ov�?���������v�b:5*���v,�]����ܷ��M�Ջr?P$g�l&�ת�����Z���N����:p#0�j��>1���ͭ��2���c
����c���}�έ��2sƎ1+�Y峨w���طC�oR#�;��g)l��Z�б)i�艦x(jK��ߵ����8�������~�Ra���=�y=� Ccu�}?��,��=}On@�cp���[C=	>E�/o@]����V%n�^�b�&XN ~��U�cBy<�Ku��nB&���O�A� s]ux<}�8[ͭ�wn�$4K�9tZ�岃�v�#�����wZ�"���c'�BP	[��c��tY7#�Ҝ�v|Gt:���KAj� �N�@�G'�$u@�W�@BZ��� �@� 2)�2�0�h$�t@��J �� 0@ �2H	)�!H)�� �_4����KgGe��eU�Y���6�Q���Z���іO{��~��m@T	��;6K�:VY��k���|o����� F�4��vvy=��:׭��0�,e�jٖ�r��p��?��w4��:��p (�s[l�n���Xg�x/]�2n7�ed��E����Z�H�z�s L���=IZuf�G�حZ<�Ò̙,���8�ty��*K�(����%��A�Q4":r �<�E�ࡩ(���?���e(��D�Bɞ��2�����Y�T��[�ě�;"�D2�3�'�B�8�)�R\�ħ����L�O(Ѩir��ci�g���d�k-�Z�!Ԍ�I�I��8�,�W���U%�e آ�XR0?�`�.|'W�%� ��!��-��Y��#҉���C�C�� C|T��Z�CX9
<a&U �%s.�;QIv�R����d����"���V�4��l�w�d�ot\%�h�Lɡ��}�$'"HI������<UH���=��;��L�C"<R܋Т�ȝA)� |T����͌�z2���4����nM���f+U+�4��;�OT��;�DY�WTR�I���+�]+p�FX|T�H�������eQ�����vg�����<H#���@�51li�J�\1��g�
�_�|��`�B�%Y�D��9�tI���Ơ�!2#"]RLM���UdH=2��ƬOO���U&��������w8�ۇǪ�xX;4����ry��ۻ���雗gC��X�l����+�0�@�pda�t��Y���B�'�J�'̪f����Ci���{$	E��5��%$)3f}1��9(��"L|��h��N�c�'Ԯ���G���>)��
7 J���BP`A�!�KQVN��  v9�����D�?�]�Q���D�h�x� �YBQ5��N
��4�,��N��5���a��OZ�:���"z�3�Tl��m���5�9}q�Y��S�鶛�;q�de�9t,�C���j���Cg⧩��M�f���
�{����UA�j`���s�T�UN?'��"H��@t�[U`�`����L�����˫^]���sX2y@��uk�<}�N��$Ě���#��ɒ��R3�5l�ul��ps7����	*L���ߙ���Y��;?o���u�������Ӄ�}?#U;T�����@�n}�;���66�ݨ�� ���W&��Y��ݿk$���b�����Hi��u��H�^_7|׮8l��1��%]G�Gr�W�g7�� �z�v/Z��be��^��G����Z>o��ϑ�r,nB 娚:�H�g�GݷЕ�;k�cҳ@�)(� ��w'�[%TNG{j� �\h���(�F.{�X��K�Rx�|��8;��wbDn�\���t�<�v��O��7^���%��r�kI]��@�	��'$�:<W��+w�e���x(�8�)7 �|S������72]��>��� � ?ܹ7VOW�ظgԽ��{�j6�DM��Hɘ� ]��7n��=ZZQ����}9�_�?����?��UK�f����8�[�;"ŘM��7�"\��N�l<��:�����2�L�~�_�"����]:�f�'��ٝ�����G�Ȯ���2b��N�
 �� �8i/�L`�V d���d� �c�� L��� � 8�1�@&,���` �&��Pg�� ] #f�l�	�M[r52���"��>&XS��IA�M�� �o�{M��@��%"�X���Oq�ϩ��\���4M;���k[�Go�{kq������Y��"5BD�K��G�[Q�w�^7m���ٻrMx����%+Ry����ٹoU�<N�ڲb��rh�^��M8!�o�� � |��,�u���mww	��� �w��H�v���i[�}P�9*�Ovqu��⬀3�$��d����1�tM"XX���� ���H1�i����TN@R�T�9O�,��vɋ%dU
$&?��Y�hC+��
[e��.�d� ��ڌ�#S:��=��]�5K�&7�XI���綳Uq���)�"��涌z�VS� 3�;��Y��H`� �����M��;H�jܢK�Dȳ,1?�&A�8NG��uT�͐�z����JEIYq�Ql� �8d�X��u=ЖXb��I��ЂV94�D���0(�r�c��z�@,
^I�t�?���h+5�]X�_��k�&�$୒g���#'�,���^�1Z��aP��Ǳ��*�^�	+\��LX����bŘ�u7y3�ap�Z�1X��v���V�i����ZG��wUZ��U�:��5��R˥�jЈd��M�#�Y�^�
�觊N�9��;��T��v�L��(�R�,��j�-$�Z8�iʉ=p`���1����D"D�"D���ߪ���D� ��d��$�|�b2E��ŷj0j�4��&�if5�Q�D8u�
G&1�� DU��-t�_��<�5�x�o�����WAc#�˞���bY����lJϱ�/�9�Ƨ��66�!"<F?$�a�v.�" P�l�D���\���d�@'���'����;Xz��@�
��|l��T�;|E�r��>E?�w��G�{���	�P�<�"S�/�چK�A�KD8v|Q����te.��d%G�">�8xEq�^m>Pqp���y-B�Q���H�s�gz�NPЧp	 H�������[���RC:�$�CgCk����0�I�h���q�Z�h��1�+��U3R�g���(�##C1�h�b�݀����)3�~�!������g;���#3�dFsw%.�Y��v����D�tw'Vgj�Ј�K�S�&{���*�4U9{�� T�U(�{��q'�Z]��L��Ry>[xG�YH����\�W��A�9ȋ�s��)S��y8�7NH�Frs-R9{�p��A5b��n�2sw�e)Հ��B�����Y�#�68;� o#!��_�"MENڦ������N|���ێӔ.4G��XҸ/���q0��g�� JY�4t��Ǔ�֡3�{V�6^� t���I�#����?��t[������P�g{��	2����9�˥pz��>��� �?���'Ԍ�@
�P.ʼ�yXp��q�ՎS�<m�1�;#ѽ	1�C�pZ��wCN��s��gejԄ�朽3B|B:�e�.r� �w����M��6�p`b�5�;�j'߈�:!�>�ɑĞ���.LR�H�1�+e�>��}��� ���0`.�2:e)7�'>˟{~�U�ZfN{��}��	��u��om��]�'���V�K�-G>K��0�Z��D������I&s�b{bڸ:5�iv�}[ۼ���.����Z]$���i���8�r=�����Wq�1��<�u���X��[�O�^���f���|��܋�1��W�eӮ痳_���r�-�rq�p����@�e���x�5ŏ-��m��9��wu�V��\��8�dP�!���
8�j�B�t�$2@H��dH @�&$Ft�d�.��:@t���@`O� % ���,��@@�� Yn���	j�����ٳ����bO^���x9�-�����N#���CL�Hj8P�����Y��ծ�OY��8[6%ͨzd4��>��Y��U�<g�=��n7r�3a�W#m��٫��cYx9�>�r�o�H�%٪�Uor���i��n�R�Y��ͳF��ˇug5;:���'�ڿ��,:3/בerw�A|�)DuH�[�uS�#7���ܛ�kqh�uZV����g�]<� �N�Lel�"A�bS���!�b4�	���q�@>*X��n����Fu*ijY/#���%j�X���QGe%�������;T�0e�F,Y��ԤRi
%#�hp���F���3u��e.���N�H����Ta����%�苢H�eI��`� �ԉ�Id�	�^����d���JRcV���"�#����
ؓR�y5���H���M8�f��Gt����bH�E��, �S`D1�D
D�Ş��E2\ߌhKtU�:6PwV�hj������&���#�Ӣ�z���*z��$:�N