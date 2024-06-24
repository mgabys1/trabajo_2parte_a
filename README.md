# trabajo_2parte_a
Esta es una aplicación de gestión de tareas desarrollada con Ionic y Angular. Está diseñada para ayudar a los usuarios a organizar y administrar sus tareas diarias de manera eficiente. La aplicación permite agregar, editar, y listar tareas de una manera intuitiva y fácil de usar.
## Funcionalidades
Agregar Tareas: Los usuarios pueden agregar nuevas tareas ingresando un título y una descripción. Las tareas se pueden clasificar según la prioridad y la fecha de vencimiento.

Editar Tareas: Los usuarios pueden actualizar la información de una tarea existente. Esto incluye cambiar el título, la descripción, la prioridad y la fecha de vencimiento.

Listar Tareas: Las tareas se muestran en una lista organizada. Los usuarios pueden ver todas sus tareas en un solo lugar, con detalles como el título, la descripción y la fecha de vencimiento.

Eliminar Tareas: Los usuarios pueden eliminar tareas que ya no son necesarias, manteniendo la lista de tareas limpia y relevante.

### Requisitos previos
Antes de empezar, asegúrate de tener instalado lo siguiente:

Node.js
npm (Node Package Manager)
Ionic CLI


## Estructura del proyecto
La estructura principal del proyecto es la siguiente:

src/

├── app/

│   ├── home/

│   │   ├── home-routing.module.ts

│   │   ├── home.module.ts

│   │   ├── home.page.html

│   │   ├── home.page.scss

│   │   └── home.page.ts

│   ├── task-list/

│   │   ├── task-list.component.html

│   │   ├── task-list.component.scss

│   │   └── task-list.component.ts

│   ├── create-edit-task/

│   │   ├── create-edit-task-routing.module.ts

│   │   ├── create-edit-task.component.html

│   │   ├── create-edit-task.component.scss

│   │   ├── create-edit-task.component.spec.ts

│   │   ├── create-edit-task.component.ts

│   │   ├── create-edit-task.module.ts

│   │   ├── create-edit-task.page.html

│   │   ├── create-edit-task.page.scss

│   │   ├── create-edit-task.page.spec.ts

│   │   └── create-edit-task.page.ts

│   ├── app-routing.module.ts

│   ├── app.component.ts

│   └── app.module.ts

├── assets/

├── environments/

├── theme/

└── index.html
