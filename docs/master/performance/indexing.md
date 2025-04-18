# Indexing

[[TOC]]

## Introduction

When dealing with large volumes of data and retrieving complex information like variants and prices, optimizing queries becomes a challenge.

Indexers create and maintain indexes, which are data structures optimized for quick retrieval of information. When data is added to a system, the indexer analyzes it and extracts key information or metadata. This metadata is then stored in the index, along with pointers to the original data.

By indexing data, the system can quickly locate relevant information without having to scan through every piece of data sequentially. This greatly speeds up search and retrieval operations, especially in large datasets.

Indexers improve the overall user experience. Users can quickly find what they're looking for, leading to increased satisfaction and productivity.

## Essential Indexers in Bagisto

To enhance **Bagisto's** performance, the following indexers play a crucial role:

### Price Indexing

Price indexing is a crucial component of eCommerce operations, ensuring that product prices are accurately reflected across the storefront. This documentation will delve into how Bagisto handles price indexing.

The price indexing process in Bagisto involves updating product prices in the database whenever changes occur. This process ensures that the latest price information is reflected accurately across the storefront. 

### Inventory Indexing

Similar to price indexing, the inventory indexing process in Bagisto involves updating product quantities in the database. Whenever a product is purchased, returned, or restocked, Bagisto automatically adjusts the inventory levels accordingly. This real-time synchronization ensures that inventory information remains accurate and up to date. Ensures that all pricing rules, including catalog rules, are applied consistently and accurately across the store.

### Flat Indexing

Flat indexing in Bagisto is a vital mechanism designed to enhance the performance and efficiency of product data retrieval.
The indexer processes products in batches, which is efficient for handling large datasets without overwhelming the system.
It manages a set of fillable attribute codes that are essential during the creation of the flat index. The flat indexer takes into account various channels and locales, ensuring that product data is accurately indexed for different market segments.  A predefined list of attribute codes, such as `sku`, `name`, `price`, `weight`, and `status`, that can be populated during the indexing process.
By default, the Flat Indexer reindexes products based on product creation or update events. However, there are scenarios where you might need to reindex the flat index in response to changes in channels or locales. In such cases, you can manually trigger the re-indexing process to ensure that the flat tables reflect the latest channel and locale updates.

### Catalog Rule Indexing

Catalog rule indexing in Bagisto ensures that product prices are updated based on any changes to catalog rules, such as offers expiring or being updated. To maintain accurate pricing, Bagisto schedules the catalog rule indexer to run daily. This scheduled task ensures that any modifications to catalog rules are promptly applied to the product prices.

The catalog rule indexing process is set to execute at 00:01 every day. The product prices are consistently recalculated and updated based on the current catalog rules. This automatic re-indexing guarantees that any changes in promotional offers, discounts, or other pricing rules are reflected in the product listings without any manual intervention.

### ElasticSearch

As Elastic is designed to handle large amounts of data and provide fast and scalable search capabilities, **Bagisto** leverages its capabilities to index all products, thereby significantly enhancing the search functionality.

## Configuration Setup

To configure Elasticsearch, please refer to the [Configuration Setup](https://devdocs.bagisto.com/2.x/advanced/indexing-products-to-elasticsearch.html) documentation.

## Re-indexing

The `Re-indexCommands` console command is responsible for re-indexing data within Bagisto, facilitating efficient data retrieval and search functionality. This command offers flexibility in selecting specific indexers and re-indexing modes to suit varying requirements.

By default, re-indexing is executed at the scheduled time or based on specific events, such as product creation or updates. However, there may be situations where you need to manually trigger re-indexing. This can be done using the following commands:

#### Command Signature

The command `php artisan indexer:index` in Bagisto is used to manage the re-indexing of various indexers. Here is a detailed description of its usage:

```shell
php artisan indexer:index {--type=*} {--mode=*}
```    
- **--type**: Specifies the type of indexers to reindex.
- **--mode**: Specifies the re-indexing mode, either `full` for full re-indexing or selective for `selective` re-indexing (default).

- **Full Reindexing for All Types**

```shell
php artisan indexer:index --mode=full
```
This command performs a full re-indexing for all indexers by default.


- **Selective Re-indexing**

```shell
php artisan indexer:index --type=price
```

This command performs selective re-indexing specifically for the price indexer.

Price and price rule indexing are scheduled to re-index at a specific time each day to ensure that the latest pricing information is accurately reflected in searches and displays. The following commands are scheduled to run daily at 00:01 AM:

```php
$schedule->command('indexer:index --type=price')->dailyAt('00:01');
$schedule->command('product:price-rule:index')->dailyAt('00:01');