$('document').ready(function()
{    
   // name validation
    var nameregex = /^[a-zA-Z ]+$/;
   
   $.validator.addMethod("validname", function( value, element ) {
       return this.optional( element ) || nameregex.test( value );
   }); 
   
   // valid email pattern
   var eregex = /^([a-zA-Z0-9_.-+])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
   
   $.validator.addMethod("validemail", function( value, element ) {
       return this.optional( element ) || eregex.test( value );
   });
   
   $("#register-form").validate({
     
    rules:
    {
    name: {
     required: true,
     validname: true,
     minlength: 4
    },
    email: {
     required: true,
     validemail: true
    },
    password: {
     required: true,
     minlength: 8,
     maxlength: 15
    },
    cpassword: {
     required: true,
     equalTo: '#password'
    },
     },
     messages:
     {
    name: {
     required: "Por favor ingrese un nombre de usuario",
     validname: "El nombre debe contener solo letras del alfabeto y espacios",
     minlength: "Tu nombre de usuario es muy corto"
       },
       email: {
       required: "Por favor ingresa una dirección de correo",
       validemail: "Ingresa un correo valido"
        },
    password:{
     required: "Por favor ingresa una contraseña",
     minlength: "La contraseña debe tener al menos 8 caracteres"
     },
    cpassword:{
     required: "Por favor repite la contraseña",
     equalTo: "Las contraseñas no coinciden!"
     }
     },
     errorPlacement : function(error, element) {
     $(element).closest('.form-group').find('.help-block').html(error.html());
     },
     highlight : function(element) {
     $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
     },
     unhighlight: function(element, errorClass, validClass) {
     $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
     $(element).closest('.form-group').find('.help-block').html('');
     },
     
     submitHandler: function(form) {
                    form.submit();
     alert('ok');
                }
     }); 
 })