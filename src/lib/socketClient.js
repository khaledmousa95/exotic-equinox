import { io } from 'socket.io-client';

// Replace with your actual Strapi URL
const socket = io('http://localhost:1337');

// WebSocket connection handler
export const setupSocketConnection = (onProductCreate, onProductUpdate, onProductDelete) => {
  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  // Listen for product creation event
  socket.on('product:create', (newProduct) => {
    console.log('New Product Created:', newProduct);
    onProductCreate(newProduct);
  });

  // Listen for product update event
  socket.on('product:update', (updatedProduct) => {
    console.log('Product Updated:', updatedProduct);
    onProductUpdate(updatedProduct);
  });

  // Listen for product deletion event
  socket.on('product:delete', (deletedProduct) => {
    console.log('Product Deleted:', deletedProduct);
    onProductDelete(deletedProduct);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });
};
