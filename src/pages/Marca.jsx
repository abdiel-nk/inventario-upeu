import { useQuery } from "@tanstack/react-query";
import {
  MarcaTemplate,
  SpinnerLoader,
  useEmpresaStore,
  useMarcaStore,
} from "../index";
import { useDebounce } from "../hooks/Dobounce";
export function Marca() {
  const { mostrarMarca, datamarca, buscarMarca, buscador } = useMarcaStore();
  const debounceBuscador = useDebounce(buscador, 300);
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar marca", { id_empresa: dataempresa?.id }],
    queryFn: () => mostrarMarca({ id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  //problemas con la marca
  const { data: buscardata } = useQuery({
    queryKey: [
      "buscar marca",
      { id_empresa: dataempresa.id, descripcion: debounceBuscador },
    ],
    queryFn: () =>
      buscarMarca({
        id_empresa: dataempresa.id,
        descripcion: debounceBuscador 
      }),
    enabled: !!dataempresa?.id && !!debounceBuscador?.trim(),
  });

  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return error.message;
  }
  const marcaMostrar = debounceBuscador?.trim()? buscardata ?? [] : datamarca;
  return <MarcaTemplate data={marcaMostrar}/>;
}