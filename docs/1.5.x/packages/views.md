# Views

[[TOC]]

To learn in detail about Views, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/views).

## Directory Structure

- Create a **`Resources`** folder in the **`packages/Webkul/Blog/src`** path. Inside the **`Resources`** folder, create another folder named **`views`**. Now, inside the **`views`** folder, we need to create two folders, namely **`admin`** and **`shop`**. Finally, we need to create two more folders, namely **`default`** and **`velocity`**, under the **`shop`** folder. The updated directory structure will look like this:

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          ├── admin
                          └── shop
                              ├── default
                              └── velocity
  ```

  ::: tip The default and velocity folders
  Whenever you create a Blade file for the shop front, you need to keep the same file in both the **`default`** and **`velocity`** folders. This is because we are using the **`theme`** middleware. When we use the **`default`** theme, the files will be called from the **`default`** folder, and when we use the **`velocity`** theme, the files will be called from the **`velocity`** folder.
  :::

  ::: warning
  In this tutorial, we are using the **`theme`** middleware and the **`velocity`** theme. Therefore, it is necessary to keep the files in the **`velocity`** folder. However, if we are not using the **`default`** theme, it is not necessary to keep the same files in the **`default`** folder.
  :::

- Inside each folder, **`admin`** and **`velocity`**, create a file named **`index.blade.php`** and add some HTML to it.

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          ├── admin
                          │   └── index.blade.php
                          └── shop
                              ├── default
                              └── velocity
                                  └── index.blade.php

  ```

  - **`admin/index.blade.php`**

    ```html
    <h2>Blog Admin Page</h2>
    ```

  - **`shop/velocity/index.blade.php`**

    ```html
    <h2>Blog Shop Page</h2>
    ```

## Load Views from Package

- Now, we need to register our views in the service provider's `boot` method. Open the file **`packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`** and update it as follows:

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  class BlogServiceProvider extends ServiceProvider
  {
     /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {
          //... 

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');
      }
  }
  ```

- Now, check the routes in your browser.

  ::: details Shop Output

  ![Shop Browser Output](../../assets/1.5.x/images/package-development/blog-shop-output.png)

  :::

  ::: details Admin Output

  ![Admin Browser Output](../../assets/1.5.x/images/package-development/blog-admin-output.png)

  :::
