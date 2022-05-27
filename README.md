# ProyectoFinal_Pruebas

## Ejecución de Pruebas de Reconocimiento
1. Tener en ejecución Ghost en el puerto 3002 con las credenciales anteriormente mencionadas
2. Despúes de clonar el repositorio en la máquina local con el comnado git clone https://github.com/AAlbaB/ProyectoFinal_Pruebas.git
3. Ubiquese en la carpeta ../ProyectoFinal_Pruebas/02-PruebasReconocimiento
4. Se debe instalar en esta carpeta las node_modules con el comando npm install
5. Ejecutar el comando cypress run -C monkey-config.json para que los Monkey comiencen a explorar la página
6. Los resultados de esta ejecución se encuentran en la carpeta ../ProyectoFinal_Pruebas/02-PruebasReconocimiento/results
7. Dentro de la carpeta results, se encontrara un archvio html donde hay un resumen de los tipos de evento aleatorios que el monkey realizo y un video que muestra la ejecución de completa de la prueba.