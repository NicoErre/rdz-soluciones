# RDZ Soluciones - Servicios Eléctricos en CABA

Sitio web oficial y landing page de alta conversión para **RDZ Soluciones** (`rdzsoluciones.com.ar`).

Desarrollado para brindar una presencia digital confiable, profesional y con foco en captación rápida de clientes a través de **WhatsApp** y **llamadas de urgencia 24 hs** en la Ciudad Autónoma de Buenos Aires y alrededores.

---

## 📁 Estructura del Proyecto

```
rdz-soluciones/
├── index.html            # Landing page completa, semántica y optimizada con Schema.org
├── css/
│   └── styles.css        # Hoja de estilos moderna, responsive, variables y diseño visual
├── js/
│   └── main.js           # Cotizador interactivo, acordeón de FAQs y agendamiento
├── assets/
│   ├── logo.svg          # Logotipo vectorial oficial de RDZ Soluciones
│   ├── favicon.svg       # Favicon para navegadores y accesos directos
│   └── og-image.svg      # Imagen OpenGraph para previsualizaciones en WhatsApp y redes
└── README.md             # Esta documentación
```

---

## ⚡ Características Principales

1. **Optimización Mobile-First**: Diseñado pensando en personas que se quedaron sin luz o tienen una urgencia y navegan desde su teléfono móvil.
2. **Botón de Urgencias y Barra Móvil Fija**: Acceso inmediato a llamada directa (`11 3803-1543`) y WhatsApp (`+54 9 11 3803-1543`).
3. **Cotizador Rápido de WhatsApp en el Hero**: Permite al usuario indicar el servicio, su barrio y si tiene fotos/videos, generando un mensaje ordenado y listo para enviar.
4. **Acordeón Interactivo de Preguntas Frecuentes**: Categorizado por *Trámites y Medidores*, *Seguridad e Instalaciones*, *Presupuestos y Pagos* y *Urgencias*.
5. **Formulario de Agendamiento de Visitas**: El cliente puede indicar día, franja horaria (Mañana, Tarde o Guardia urgente) y detalle del trabajo; la solicitud se procesa de forma directa e inmediata.
6. **SEO Local & Schema.org**: Marcado `Electrician` y `LocalBusiness` para posicionamiento en Google Search en los barrios de CABA.

---

## 🌐 Cómo vincular el dominio `rdzsoluciones.com.ar` con tu Hosting

Ya tenés el dominio adquirido en [nic.ar](https://nic.ar). Para poner la web en línea, tenés dos opciones principales:

### Opción 1: Hosting Tradicional Argentino (DonWeb, Hostinger, cPanel, etc.)
1. Contratás el plan de hosting (o usás uno que ya tengas).
2. En [nic.ar](https://nic.ar), ingresás al panel de administración de dominios, seleccionás `rdzsoluciones.com.ar` y hacés clic en **Delegar**.
3. Ingresás los servidores DNS que te provea tu hosting (ejemplo en DonWeb: `ns1.donweb.com`, `ns2.donweb.com`).
4. Ingresás al Administrador de Archivos (o mediante FTP) de tu hosting y subís todos los archivos de esta carpeta dentro del directorio público (`public_html` o `www`).
5. ¡Listo! En pocas horas se propagan los DNS y tu sitio estará 100% visible.

### Opción 2: Hosting Gratuito y Moderno (Netlify, Vercel o Cloudflare Pages)
*Ventaja: Son gratuitos, incluyen certificado SSL (HTTPS) automático y cargan a velocidad ultra rápida.*
1. Creás una cuenta gratuita en [Netlify](https://www.netlify.com) o [Vercel](https://vercel.com).
2. Podés simplemente arrastrar la carpeta `rdz-soluciones` al panel de Netlify ("Drop to deploy").
3. En la sección **Custom Domains**, agregás `rdzsoluciones.com.ar`.
4. En nic.ar o en tu proveedor de DNS, apuntás los registros `A` y `CNAME` que te indique la plataforma.

---

## 📅 Opciones para Agendar Directamente (Calendly / Cal.com)

En el pie de página dejamos implementado el **Formulario de Agendamiento Directo**, que arma y envía la reserva formateada a WhatsApp para que coordines la visita.

Si en el futuro preferís una **agenda 100% automática sincronizada con tu Google Calendar**, podés usar herramientas como:
1. **Cal.com** (Código abierto y gratuito) o **Calendly** (muy popular y fácil de usar).
2. Creás tu cuenta y configurás tus horarios de disponibilidad (ej. Lunes a Viernes de 8 a 18 hs).
3. Podés reemplazar el formulario o embeber el widget agregando una sola línea de código en `index.html`:
   ```html
   <!-- Ejemplo con Calendly -->
   <div class="calendly-inline-widget" data-url="https://calendly.com/TU-USUARIO" style="min-width:320px;height:630px;"></div>
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

---

## 📞 Datos de Contacto Configurados

- **Teléfono para llamadas**: `1138031543` (`tel:1138031543`)
- **WhatsApp**: `+54 9 11 3803-1543` (`https://wa.me/5491138031543`)
- **Zonas de Cobertura**: Palermo, Belgrano, Recoleta, Villa Urquiza, Colegiales, Villa del Parque, Caballito, Almagro, Flores, Floresta, Parque Avellaneda, Mataderos, Liniers, Versalles y alrededores de CABA.
- **Horarios**: Lunes a Viernes de 8:00 a 18:00 hs / Guardias para emergencias 24 hs.
