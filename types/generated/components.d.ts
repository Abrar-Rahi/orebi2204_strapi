import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorProductColor extends Schema.Component {
  collectionName: 'components_color_product_colors';
  info: {
    displayName: 'product_color';
  };
  attributes: {
    color: Attribute.String;
  };
}

export interface ItemItem extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    displayName: 'item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.Component<'item.list', true>;
  };
}

export interface ItemList extends Schema.Component {
  collectionName: 'components_item_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuItem extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'color.product-color': ColorProductColor;
      'item.item': ItemItem;
      'item.list': ItemList;
      'menu.item': MenuItem;
    }
  }
}
