"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface DeleteConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  itemName: string;
  itemType: string;
}

const DeleteConfirmationModal = ({
  open,
  onOpenChange,
  onConfirm,
  itemName,
  itemType,
}: DeleteConfirmationModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    showSuccess(`${itemType} "${itemName}" excluído com sucesso!`);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-white border-slate-200 rounded-xl shadow-2xl">
        <AlertDialogHeader>
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 mx-auto border border-red-100">
            <Trash2 size={24} />
          </div>
          <AlertDialogTitle className="text-center text-slate-900 font-bold">
            Confirmar Exclusão
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-slate-500 font-medium">
            Você tem certeza que deseja excluir o {itemType.toLowerCase()}{" "}
            <span className="font-bold text-slate-900">"{itemName}"</span>? Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center gap-2 pt-4">
          <AlertDialogCancel className="rounded-lg font-bold text-xs border-slate-200 text-slate-500 hover:bg-slate-50">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="rounded-lg font-bold text-xs bg-red-600 hover:bg-red-700 text-white border-none"
          >
            Sim, Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmationModal;