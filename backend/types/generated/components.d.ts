import type { Schema, Attribute } from '@strapi/strapi';

export interface CapabilitiesCapabilities extends Schema.Component {
  collectionName: 'components_capabilities_capabilities';
  info: {
    displayName: 'Capabilities';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface FeaturedFeatured extends Schema.Component {
  collectionName: 'components_featured_featureds';
  info: {
    displayName: 'featured';
  };
  attributes: {
    Title: Attribute.String;
    Type1: Attribute.String;
    Type2: Attribute.String;
    Date: Attribute.Date;
    Image: Attribute.Media;
  };
}

export interface TestimonialTestimonial extends Schema.Component {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    Image: Attribute.Media;
    description: Attribute.Text;
    author: Attribute.String;
    authorTitle: Attribute.String;
  };
}

export interface TopicTopic extends Schema.Component {
  collectionName: 'components_topic_topics';
  info: {
    displayName: 'Topic';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    imgUrl: Attribute.Media;
    topic: Attribute.String;
    description: Attribute.String;
    author: Attribute.String;
    topicDescription: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'capabilities.capabilities': CapabilitiesCapabilities;
      'featured.featured': FeaturedFeatured;
      'testimonial.testimonial': TestimonialTestimonial;
      'topic.topic': TopicTopic;
    }
  }
}
