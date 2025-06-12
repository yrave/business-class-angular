import { Meta, StoryObj } from '@storybook/angular';
import { Menu } from '../../business-class-menu/business-class-menu.model';
import { BusinessClassMenuPresenterComponent } from './business-class-menu-presenter.component';

const menu: Menu = {
  food: [
    {
      name: 'Starter',
      items: [
        {
          id: 'starter1',
          name: 'Smoked Salmon Tartare',
          description: 'With avocado cream and microgreens',
          tags: ['seafood', 'gluten-free'],
        },
        {
          id: 'starter2',
          name: 'Caprese Salad',
          description: 'Heirloom tomatoes, buffalo mozzarella, and basil oil',
          tags: ['vegetarian', 'gluten-free'],
        },
      ],
    },
    {
      name: 'Main',
      items: [
        {
          id: 'main1',
          name: 'Grilled Beef Tenderloin',
          description:
            'Served with truffle mashed potatoes and seasonal vegetables',
          tags: ['meat', 'gluten-free'],
        },
        {
          id: 'main2',
          name: 'Miso-Glazed Black Cod',
          description: 'With jasmine rice and bok choy',
          tags: ['seafood'],
        },
        {
          id: 'main3',
          name: 'Pumpkin Ravioli',
          description: 'In sage butter sauce with roasted pine nuts',
          tags: ['vegetarian'],
        },
      ],
    },
    {
      name: 'Dessert',
      items: [
        {
          id: 'dessert1',
          name: 'Chocolate Fondant',
          description: 'With vanilla bean ice cream',
          tags: ['vegetarian'],
        },
        {
          id: 'dessert2',
          name: 'Cheese Plate',
          description:
            'Selection of international cheeses with crackers and fruit',
          tags: ['vegetarian'],
        },
        {
          id: 'dessert3',
          name: 'Fresh Fruit Bowl',
          description: 'Seasonal fruits with mint syrup',
          tags: ['vegan', 'gluten-free'],
        },
      ],
    },
  ],
  drinks: {
    nonAlcoholic: [],
    wines: [],
  },
};

const meta: Meta<BusinessClassMenuPresenterComponent> = {
  component: BusinessClassMenuPresenterComponent,
  args: {
    filteredMenu: menu,
    isFavorite: (item) => {
      return false;
    },
    getColor: (tag) => {
      return 'gray';
    },
    tags: (item) => [
      { name: 'Angular', color: 'blue' },
      { name: 'Storybook', color: 'green' },
      { name: 'Component', color: 'red' },
    ],
    addFavorite: (item) => console.log('Add favorite:', item),
    removeFavorite: (item) => console.log('Remove favorite:', item),
  },
  title: 'Business Class Menu/Presenter',
  argTypes: {
    isFavorite: { type: 'function', control: false },
    getColor: { type: 'function', control: false },
    tags: { type: 'function', control: false },
  },
};

export default meta;
type Story = StoryObj<BusinessClassMenuPresenterComponent>;

export const Default: Story = {};
