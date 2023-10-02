export const Meta: React.FC<any> = ({ title }) => {
  return (
    <>
      <title> {title} </title>
      <meta name="keywords" content="comprar, venta, compras en línea, envío rápido, compra personalizada" />
      <meta
        name="description"
        content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles."
      />
      <meta name="language" content="es" />
      <link rel="canonical" href="https://www.mercadolibre.com.co/" />
      <meta name="author" content="Mateo Aponte" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Mercado Libre - Colombia" />
      <meta
        property="og:description"
        content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles."
      />
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
    </>
  );
};
