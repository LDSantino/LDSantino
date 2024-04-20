'use client';

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import Date from '@/components/DatePickComp';

export default function Modale() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="w-[200px]">Verifica disponibilità</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={'blur'} placement="center" className="h-[500px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Compila il form per il tuo preventivo</ModalHeader>
              <ModalBody>
                <Date />
                <Date />
                <Button className="mt-5">Verifica</Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
