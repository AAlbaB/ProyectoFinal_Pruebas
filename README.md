# ProyectoFinal_Pruebas

# Integrantes:
- José Alexander Palacio Muñoz - j.palaciom@uniandes.edu.co
- Oscar Andrés Alba Barragán - o.alba@uniandes.edu.co
- Diego Fernando Castro Plazas - df.castrop1@uniandes.edu.co
- Diego Fernando Ramírez Rodríguez - df.ramirezr1@uniandes.edu.co

### Consideraciones antes y durante la ejecución de las pruebas
1. Es importante tener en cuenta que antes de inicilizar las pruebas en cypress, se debe crear el siguiente usuario administrador manualmente dentro de la aplicación de Ghost llendo al ling http://localhost:3002/ghost/ y poniendo la siguiente información como se muestra en la imagen 1.

Site title: 'A su elección'
Full name: 'A su elección'
Email address: hola@miso.com
Password: Misotest2022*

![image](https://user-images.githubusercontent.com/98669202/169715537-0d44cc44-82b7-4024-aac0-b45b89cc4c64.png)
  
Imagen 1.

# 01. Ejecución de Pruebas de exploratorias.
1. Tener en ejecución Ghost en el puerto 3002 con las credenciales anteriormente mencionadas
2. Despúes de clonar el repositorio en la máquina local con el comnado git clone https://github.com/AAlbaB/ProyectoFinal_Pruebas.git
3. Ubiquese en la carpeta ../ProyectoFinal_Pruebas/02-PruebasReconocimiento
4. Inicie la aplicacion con ghost start.

Teniedo en cuenta las caracteristicas de las pruebas exploratorias, las cuales son una forma para crear la primera versión del inventario de pruebas a realizar o para actualizar inventarios existentes, dado que son pruebas 
sirven para detectar de forma manual defectos en la aplicación, y permiten recorrer la aplicación de forma manual, a continuacion se  puede observar el informe de los diferentes escenarios en los cuales se desarrollaron las pruebas, resaltando la principal funcionalidad, siendo esta la entrada de datos en las diferente secciones que involucra la aplicacion (post, tags, page, member, settings, etc.).





# 02. Ejecución de Pruebas de Reconocimiento
1. Tener en ejecución Ghost en el puerto 3002 con las credenciales anteriormente mencionadas
2. Despúes de clonar el repositorio en la máquina local con el comnado git clone https://github.com/AAlbaB/ProyectoFinal_Pruebas.git
3. Ubiquese en la carpeta ../ProyectoFinal_Pruebas/02-PruebasReconocimiento
4. Se debe instalar en esta carpeta las node_modules con el comando npm install
5. Ejecutar el comando cypress run -C monkey-config.json para que los Monkey comiencen a explorar la página
6. Los resultados de esta ejecución se encuentran en la carpeta ../ProyectoFinal_Pruebas/02-PruebasReconocimiento/results
7. Dentro de la carpeta results, se encontrara un archvio html donde hay un resumen de los tipos de evento aleatorios que el monkey realizo y un video que muestra la ejecución de completa de la prueba.

# 03. Ejecución Pruebas de Validación de Datos

## Descripción
Las pruebas que se detallan a continuación permiten testear la aplicación Ghost (versión 4.47.0) a partir de la validación combinaciones de casos de uso.
Todos los escenarios de prueba detallados a continuación tienen en común que comparten la introducción de información a la aplicación en algunos de sus campos de texto y ser con la intención de validar que el formato de información que estos campos aceptan sea el que se espera en el desarrollo de la aplicación.

Los datos introducidos en los campos fueron generados de acuerdo con las siguientes estratégias de generación:
- pool de datos a-priori, 
- pool de datos (pseudo) aleatorio dinámico
- escenario aleatorio

La herramienta seleccionada para realizar las pruebas es Cypress

La para obtener y ejecutar la versión 4.47.0 de la aplicación Ghost se descargó una imagen de esta versión en Docker y se le asignó el puerto 3002 con el siguiente comando en la terminal de PowerShell:

  <docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0>

Una vez ejecutado este comando podrá ingresar a la url http://localhost:3002 para ver la aplicación Ghost corriendo.


1. Para la ejecución de algunas pruebas se utilizó la función xpath de cypress, la cual, para ser usada se debe instalar con el siguiente comando:
  
  npm install -D cypress-xpath
  
  Además la línea que dice require('cypress-xpath') en el archivo ./03-ValidacionDatos/cypress/support/index.js no debe estar comentada

3. Tambien importante tener en cuenta que la aplicación de Ghost permite un máximo de 100 ingresos como usuario administrador por dirección IP cada hora y como nuestras pruebas realizarán al rededor de 120 ingresos, cuando las pruebas fallen y generen la alerta que se muestra en la imagen 2, será necesario detener el contenedor de docker (imagen 3), borrar el contenedor (imagen 4), borrar el volumen (imagen 5) y volver a ejecutar el comando docker runn .. explicado en el punto anterior

![image](https://user-images.githubusercontent.com/98669202/169708276-19eb70a0-51ca-4aba-86e7-f49554cdf6bc.png)
  
Imagen 2.

![image](https://user-images.githubusercontent.com/98669202/169715616-7cb41657-dd3a-4fe7-a3ac-3f7f0aebb919.png)
Imagen 3.

![image](https://user-images.githubusercontent.com/98669202/169715639-02603c2e-248a-4044-8b41-164f9b55f0ad.png)
Imagen 4.

![image](https://user-images.githubusercontent.com/98669202/169715674-b6040943-4bb4-4c48-8fb2-c52fce1151ff.png)
Imagen 5.
  

## Estrategias de generación de datos
  
### 1. Estrategia pool de datos a-priori
Para la estrategia con datos a priori se utilizaron datos creados por los tester y ubicados en la carpeta ./cypress/support
  
### 2. Estrategia pool de datos (pseudo) aleatorio dinámico
Para la generación de datos pseudo aleatorios dinámico, se utilizó la herramienta Mockaroo estableciendo un template de data para el caso requerido, posteriormente se generó un archivo json con 1000 registros y este fue ubicado dentro del proyecto cypress. En cada caso de pruebas implementado, se importó el mencionado archivo haciedo uso aletario de los registros allí encontrados.
  
 ### 3. Estrategia escenario aleatorio.
 Para la generación aleatoria de datos, se utilizó la herramienta faker importando la librería en cada uno de los archivos que se utilizaron para generar los valores aleatorios. De acuerdo a las entradas del escenario de prueba a validar, se hacía uso de los métodos expuestos por la librería faker.
  
 
  

## Escenarios

Los 120 escenarios ejecutados, con su respectiva estrategia de generación de datos y su tipo de oráculo se detalla a continuación

|Archivo de pruebas|Escenario|Oráculo|Tipos de datos|
|---|---|---|---|
|./integration/loginPseudo.spec.js|1. Login con solo un usuario que tiene un email|login invalido|pseudo aleatorio|
|_|_|_|_|
|./integration/Login.spec.js|1. Login correcto|login valido|a_priori|
|./integration/Login.spec.js|2. Login con usuario vacío|login invalido|a_priori|
|./integration/Login.spec.js|3. Login con usuario inexistente|login invalido|aleatorio|
|./integration/Login.spec.js|4. Login con password vacío|login invalido|a_priori|
|./integration/Login.spec.js|5. Login con password equivocado,|login invalido|aleatorio|
|_|_|_|_|
|./integration/pages.spec.js|1. Login, Crear pagina con descripción con video embebido y bookmark embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|2. Login, Crear pagina con descripcion con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|3. Login, Crear pagina con descripcion y con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|4. Login, Crear pagina con descripcion con producto con titulo muy , Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|5. Login, Crear pagina con descripcion con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|6. Login, Crear pagina con descripcion con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|7. Login, Crear pagina con descripcion con producto y solo el título, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|8. Login, Crear pagina con descripcion y producto, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|9. Login, Crear pagina con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|10. Login, Crear pagina con producto con titulo muy grande, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|11. Login, Crear pagina con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|12. Login, Crear pagina con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|13. Login, Crear pagina con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|14. Login, Crear pagina con producto y solo el título, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|15. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|16. Login, Crear pagina con twitter embebido y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|17. Login, Crear pagina con spotify embebido y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|18. Login, Crear pagina con funcion otra url embebida y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|19. Login, Crear pagina con funcion otra url embebida, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|20. Login, Crear pagina con url en la descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|21. Login, Crear pagina con spotify embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|22. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|23.Login, Crear pagina con twitter embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|24. Login, Crear pagina con descripcion y video Youtube, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|25. Login, Crear pagina con bookmark cuya url es de una imagen, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|26. Login, Crear pagina con bookmark cuya url no existe, Modificar url de la página, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|27. Login, Crear pagina con bookmark que no es una url, Modificar url de la página, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|28. Login, Crear pagina con titulo muy grande, Modificar url de la página, Validar que falló al salvarse | Validar que falló al salvarse |aleatorio|
|./integration/pages.spec.js|29. Login, Crear pagina con elemento Toggle, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|30. Login, Crear pagina con Callout, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|31. Login, Crear pagina con bookmark, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|32. Login, Crear pagina con video embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|33. Crear pagina con video y bookmark, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|34. Crear pagina sencilla cambiando su url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|35. Crear pagina con descripcion con producto con titulo y boton con url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|36. Crear pagina con descripcion y con producto con titulo y boton sin url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|37. Crear pagina con descripcion con producto con titulo muy grande, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|38. Crear pagina con descripcion con producto con titulo y rating, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|39. Crear pagina con descripcion con producto y solo descripcion, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|40. Crear pagina con descripcion con producto y solo el título, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|41. Crear pagina con descripcion y producto, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|42. Crear pagina con producto con titulo y boton sin url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|43. Crear pagina con producto con titulo muy grande, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|44. Crear pagina con producto con titulo y boton con url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|45. Crear pagina con producto con titulo y rating, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|46. Crear pagina sencilla, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|47. Crear pagina con producto y solo descripcion, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|48. Crear pagina con producto y solo el título, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|49. Crear pagina con vimeo embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|50. Crear pagina con twitter embebido y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|51. Crear pagina con spotify embebido y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|52. Crear pagina con funcion otra url embebida y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|53. Crear pagina con funcion otra url embebida, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|54. Crear pagina con url en la descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|55. Crear pagina con spotify embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|56. Crear pagina con vimeo embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|57. Crear pagina con twitter embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|58. Crear pagina con descripcion y video Youtube, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|59. Crear pagina con bookmark cuya url es de una imagen, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|60. Crear pagina con bookmark cuya url no existe, Validar que falló el bookmark | Validar que falló el bookmark |a_priori|
|./integration/pages.spec.js|61. Crear pagina con bookmark que no es una url, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|62. Crear pagina con titulo muy grande, Validar que falló al salvarse | Validar que falló al salvarse |aleatorio|
|./integration/pages.spec.js|63. Crear pagina con elemento Toggle, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|64. Crear pagina con Callout, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|65. Crear pagina con bookmark, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|66. Crear pagina con video embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|67. Crear pagina sencilla con un excerpt muy largo en los settings| Validar que el excerpt no admitio el texto largo |aleatorio|
|./integration/pages.spec.js|67. Create a valid tag| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|67. Create a tag without name must fail| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|68. Create a tag without description must pass| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|69. Create a tag without color must pass| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|70. Enter invalid color must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|71. Enter invalid description must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|72. Create a new tag with this order: 1. Name, 2. Color, 3. Description, 4. Slug| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|73. Create a new tag with this order: 1. Color, 2. Name, 3. Description, 4. Slug| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|74. Create a new tag with this order: 1. Name, 2. Description, 3. Color, 4. Slug| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|75. Create a new tag with this order: 1. Slug, 2. Color, 3. Name, 4. Description| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|76. Create a tag with this order: 1. Name, 2. Delete name, 3 Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|77. Create a tag with this order: 1. Slug, 2. Delete slug, 3. Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|78. Create a tag with passing long text| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|79. Create a tag with passing long text to the name must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|80. Create a tag with passing long text to the color| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|81. Create a tag with passing long text to the color must generate a form field error| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|82.  Create a tag with passing long text to the color must generate a submit error| Validar que no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|83. Create a tag only having the name must pass| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|84. Create a tag only having the description must fail| Validar que no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|85. Create a new tag with this order: 1. Slug, 2. Description, 3. Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|86. Create a new tag with this order: 1. Slug, 2. Color, 3. Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|87. Create a new tag with this order: 1. Description, 2. Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|88. Create a new tag with this order: 1. Description, 2. Name 3. Slug| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|89. Create a tag with invalid description and invalid name must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|90. Create a tag with valid color and not valid name must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|91. Create a tag with not valid color and invalid name must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|92. Create a tag with valid name and invalid slug must fail| Validar que se genere un error de formulario y no se pueda crear el tag|aleatorio|
|./integration/tag.spec.js|93. Create a tag with all the invalid data must generate a submit error| Validar que se genere un error de formulario|aleatorio|
|./integration/tag.spec.js|94. Create a tag in this order: 1. Name 2. Slug 3. Description must pass| Validar que el tag fué creado satisfactoriamente|aleatorio|
|./integration/tag.spec.js|95. Create a tag in this order: 1. Slug 2. Name| Validar que el tag fué creado satisfactoriamente|aleatorio|
| ./integration/post.spec.js | 96\. Post titulo y descripcion correcta                                                          | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 97\. Post titulo correcto con descripcion en blanco.                                             | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 99\. Post titulo correcto y descripcion con caracteres especiales.                               | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 99\. Post titulo correcto y descripcion se reescribe.                                            | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 100\. Post titulo con caracteres especiales y descripcion correcta.                               | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 101\. Post titulo con caracteres especiales y descripcion en blanco.                             | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 101\. Post titulo y descripcion con caracteres especiales.                                       | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 103\. Post titulo con caracteres especiales y descripcion se reescribe.                          | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 104\. Post reescribir titulo y descripcion correcta.                                             | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 105\. Post reescribir titulo y descripcion en blanco.                                            | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 106\. Post reescribir titulo y descripcion con caracteres especiales.                            | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 107\. Post reescribir titulo y reescribir descripcion.                                           | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 108\. Post titulo correcto, se borra descripcion y se crea bookmark.                             | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 109\. Post titulo con caracteres especiales, se borra descripcion y se crea bookmark.            | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 110\. Post titulo se reescribe, se borra descripcion y se crea bookmark.                         | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 111\. Post titulo correcto, descripcion se reescribe se crea un falso bookmark.                  | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 112\. Post titulo con caracteres especiales, descripcion se reescribe se crea un falso bookmark. | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 113\. Post titulo en blanco, descripcion se reescribe se crea un falso bookmark.                 | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 114\. Post titulo se reescribe, descripcion se reescribe se crea un falso bookmark.              | Validar bookMark del post | aleatorio |
| ./integration/post.spec.js | 115\. Post titulo en blanco con descripcion correcta.                                            | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 116\. Post titulo en blanco con descripcion caracteres especiales.                               | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 117\. Post titulo con exceso de caracteres y descripcion correcta.                               | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 118\. Post titulo con exceso de caracteres y descripcion en blanco.                              | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 119\. Post titulo con exceso de caracteres y descripcion con caracteres especiales.              | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 120\. Post se reescribe descripcion y titulo con exceso de caracteres.                           | Validar titulo del post   | aleatorio |
| ./integration/post.spec.js | 121\. Post titulo en blanco, se borra descripcion y se crea bookmark.                            | Validar titulo del post | aleatorio |
  
Las incidencias generadas en las pruebas se han reportado en el sistema de registro de incidencias de este repositorio.

## Instrucciones adicionales
Para ejecutar estas pruebas realize los siguientes pasos:

1. Clone el repositorio en la ubicación de su preferencia través del comando "git clone https://github.com/AAlbaB/ProyectoFinal_Pruebas.git".
2. Ingrese a la carpeta creada
3. Ingrese con una consola a la misma carpeta y luego ingrese a la carpeta 03-ValidacionDatos
4. Ejecute el comando "npm install cypress"
5. Ejecute el comando "npm install @faker-js/faker --save-dev"
6. Ejecute el comando "cypress open"
7. El comando anterior desplegará la consolta de Cypress y en su interior, cada uno de los casos de prueba generados.
8. Ejecute cada uno de los archivos de pruebas
