// store/useTreeStore.js
import { useState, useCallback } from 'react';
import create from 'zustand';

export const useTreeStore = create((set) => ({
  tree: null,
  history: [],
  future: [],
  
  setTree: (tree) => set({ tree }),
  updateNodeValue: (node, newValue) => set(state => {
    const updateValue = (n) => {
      if (n.id === node.id) {
        n.value = newValue;
      }
      if (n.children) {
        n.children.forEach(updateValue);
      }
    };
    const newTree = { ...state.tree };
    updateValue(newTree);
    return { tree: newTree };
  }),
  saveHistory: () => set(state => ({
    history: [...state.history, state.tree],
    future: []
  })),
  undo: () => set(state => {
    if (state.history.length === 0) return state;
    const previous = state.history[state.history.length - 1];
    return {
      tree: previous,
      history: state.history.slice(0, -1),
      future: [state.tree, ...state.future]
    };
  }),
  redo: () => set(state => {
    if (state.future.length === 0) return state;
    const next = state.future[0];
    return {
      tree: next,
      history: [...state.history, state.tree],
      future: state.future.slice(1)
    };
  })
}));
