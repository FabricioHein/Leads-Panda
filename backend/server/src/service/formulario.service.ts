import { Injectable } from '@nestjs/common';
import { FormularioDinamicoRepository } from 'src/repositories/formulario-dinamico.repository';
import { FormularioAskRepository } from 'src/repositories/formulario-ask.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { ErroBadRequest } from 'src/utils/msg.response';
@Injectable()
export class FormularioService {
  constructor(
    private taskRepository: TaskRepository,
    private formularioDinamicoRepository: FormularioDinamicoRepository,
    private formularioAskRepository: FormularioAskRepository,
  ) {}

  // formulario Dinamico
  async atualizarFormularioDinamico(data: any) {
    try {
      const { id } = data;
      const dataFormularioDinamico = data;

      return await this.formularioDinamicoRepository.updateFormularioDinamico(
        Number(id),
        dataFormularioDinamico,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllFormularioDinamico(empresa_configId) {
    try {
      return await this.formularioDinamicoRepository.getFormularioDinamicoAll(
        Number(empresa_configId),
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createFormularioDinamico(data: any) {
    try {
      return await this.formularioDinamicoRepository.createFormularioDinamico(
        data,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteFormularioDinamico(data: any) {
    try {
      const id = data.id;
      return await this.formularioDinamicoRepository.deleteFormularioDinamico(
        id,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  // formulario ask

  async updateFormularioAsk(data: any) {
    try {
      const { id } = data;
      const dataFormularioDinamico = data;

      return await this.formularioAskRepository.updateFormularioAsk(
        Number(id),
        dataFormularioDinamico,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByURLFormularioDinamico(url) {
    try {
      return await this.formularioDinamicoRepository.getByURLFormularioDinamico(
        url,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByURLFormularioDinamicoOpen(url) {
    try {
      const params = url;
      const form =
        await this.formularioDinamicoRepository.getByURLFormularioDinamicoOpen(
          params,
        );

      if (form && form.publico) {
        return {
          ...form,
          form: true,
        };
      }
      return {
        form: false,
      };
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getByIdFormularioAsk(empresa_configId) {
    try {
      return await this.formularioAskRepository.getByIdFormularioAsk(
        Number(empresa_configId),
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createFormularioAsk(data: any) {
    try {
      const novoForm = {
        formulario_dinamicoId: Number(data.formulario_dinamicoId),
        json: data.json,
      };

      let dataJson = data.json.map((i) => {
        return i.value;
      });

      if (data.processoId) {
        let numero = Math.random() + 100;
        let titulo = 'Formulários #' + numero;

        await this.taskRepository.createTask({
          processoId: Number(data.processoId),
          title: titulo,
          description: dataJson.toString(),
        });
      }

      return await this.formularioAskRepository.createFormularioAsk(novoForm);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async deleteFormularioAsk(data: any) {
    try {
      const id = data.id;
      return await this.formularioAskRepository.deleteFormularioAsk(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
