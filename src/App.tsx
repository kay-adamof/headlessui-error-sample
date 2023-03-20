import { Dialog } from "@headlessui/react";

import React from 'react';
import { useState } from 'react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <div>
        <p>
          Let's build a command palette!
        </p>
      </div>
    </Dialog>
  )
};
