import { Injectable } from '@nestjs/common';
import { AgendaRepository } from 'src/repositories/agenda.repository';
import { ErroBadRequest } from 'src/utils/msg.response';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
@Injectable()
export class AgendaService {
  constructor(
    private agenda: AgendaRepository,
    private clientesRepository: ClientesRepository,
    private usuarioRepository: UsuarioRepository

  ) { }

  async atualizarAgenda(data: any) {
    try {
      const { id } = data;
      const dataAgenda = data;

      return await this.agenda.updateAgenda(
        Number(id),
        dataAgenda,
      );
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAgendaByDataUsuario(data: any) {
    try {
      const userAgendas = await this.agenda.getAgendaByDataUsuario(Number(data.atendimentoId), data.date);
      const existingTimes = userAgendas
        .map(agenda => {
          const date = new Date(agenda.start);
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        });
      return this.generateTimes(existingTimes);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAvailableTimes(date_day, empresa_configId, atendimentoId) {

  }
  generateTimes(existingTimes) {
    const times = [];
    const start = 8 * 60; // 08:00
    const end = 18 * 60; // 18:00
    for (let time = start; time <= end; time += 30) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      if (!existingTimes.includes(formattedTime)) {
        times.push(formattedTime);
      }
    }
    return times;
  }
  async getAllClienteAngendaUser(data: any) {
    try {
      let client = await this.clientesRepository.getByIdCPF(data.cpf_usuario, Number(data.clientId));
      let listUsuarioWorker = await this.usuarioRepository.getUsuariaClienteAgendamento(Number(data.clientId));

      if (!client && data.nome && data.cpf_usuario) {

        let newCliente = {
          nome: data.nome,
          telefone: data.telefone,
          cpf: data.cpf_usuario,
          empresa_configId: Number(data.clientId)
        };
        
        let cadastroCliente = await this.clientesRepository.createClientes(newCliente);
        return {
          usuario: cadastroCliente,
          works: listUsuarioWorker
        }

      }

      return {
        usuario: client,
        works: listUsuarioWorker
      }

    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async getAllAgendaAtendimentoUsuario(empresa_configId) {
    try {
      return await this.agenda.getAgendaAll(Number(empresa_configId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }

  async getAllAgenda(empresa_configId) {
    try {
      return await this.agenda.getAgendaAll(Number(empresa_configId));
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async createAgenda(data: any) {
    try {
      return await this.agenda.createAgenda(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async crearAgendamentoExterno(data: any) {
    try {
      return await this.agenda.crearAgendamentoExterno(data);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  async deleteAgenda(data: any) {
    try {
      const id = data.id;

      return await this.agenda.deleteAgenda(id);
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
}
