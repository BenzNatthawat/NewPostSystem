import gql from 'graphql-tag';

export const defaults = {
  id: '',
  show: false,
}

export const resolvers = {
  Mutation: { 
    addModal: (_, { text }, { cache }) => {
      const query = gql`
        query GetModal {
          modals @client {
            id
            text
            completed
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newModal = {
        text,
        completed: false,
        __typename: 'ModalItem',
      };
      const data = {
        modals: previous.modals.concat([newModal]),
      };
      cache.writeData({ data });
      return newModal;
    },
    toggleModal: (_, variables, { cache }) => {
      const id = `ModalItem:${variables.id}`;
      const fragment = gql`
        fragment completeModal on ModalItem {
          completed
        }
      `;
      const modal = cache.readFragment({ fragment, id });
      const data = { ...modal, completed: !modal.completed };
      cache.writeData({ id, data });
      return null;
    },
  },
};
