# Prueba tecnica para SkyDropx
# Jhon Hamilton Franco Luna
# link: https://d3q4ctkrj4hf6.cloudfront.net/skydropx/index.html

## Informacion general
### para inicializarlo solo debe darse npm start.

### Este proyecto debe correrse en nodejs minimo v10.
### se usaron librerias como jest, webpack, babel, redux, bootstrap, styled components, formik con yup y corejs.

### No todos los componentes estan atomizados ya que no existe un design system.
### El header del proyecto es dinamico para cuando se necesite añadir mas rutas.

### El link al api y su token fueron separados en variables de entorno, adicionalmente se dejo un interceptor que configura todos los request con los parametros comunes.
### En los formularios los campos inactivos de remitente y receptor son totalmente funcionales (solo hace falta quitar el disable), adicionalmente los campos zip de remitente y receptor cuentan con sus respectivas validaciones (no puede ser letras, tampoco numeros negativos ni decimales) y sus mensajes de error.
