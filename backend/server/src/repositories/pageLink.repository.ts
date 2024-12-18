import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PageLinkRepository {
  constructor(private prisma: PrismaService) { }
  async getPageLinkAll(empresa_configId) {
    return await this.prisma.page_link.findMany({
      where: {
        clientId: empresa_configId,
      }
    });
  }
  async getNomeLInkExiste(nome_link) {
    return await this.prisma.page_link.findFirst({
      where: {
        nome_link: {
          equals: nome_link
        }
      },
      include: {
        links: true
      }
    });
  }
  async getByIdPageNome(nome_link) {
    return await this.prisma.page_link.findFirst({
      where: {
        nome_link: nome_link
      },
      include: {
        links: true
      }
    });
  }
  async getByIdPageLink(id) {
    return await this.prisma.page_link.findFirst({
      where: {
        id: id,
      },
      include: {
        links: true
      }
    });
  }
  async createPageLink(data) {
    console.log(data)

    return await this.prisma.page_link.create({
      data: {
        nome_link: data.nome_link,
        backgroundColor1: data.backgroundColor1,
        backgroundColor2: data.backgroundColor2,
        backgroundImage: data.backgroundImage,
        buttonColor: data.buttonColor,
        showProfilePicture: data.showProfilePicture,
        showShareLink: data.showShareLink,
        clientId: Number(data.clientId),
        linkProfile: data.linkProfile,
        links: {
          create: data.links.map(link => ({
            label: link.label,
            href: link.href,
            icon: link.icon,
          })),
        },
      }
    });
  }
  async updatePageLink(data) {
    console.log(data)

    return await this.prisma.page_link.update({
      where: {
        id: data.id
      },
      data: {
        nome_link: data.nome_link,
        backgroundColor1: data.backgroundColor1,
        backgroundColor2: data.backgroundColor2,
        backgroundImage: data.backgroundImage,
        buttonColor: data.buttonColor,
        showProfilePicture: data.showProfilePicture,
        showShareLink: data.showShareLink,
        clientId: Number(data.clientId),
        linkProfile: data.linkProfile,
        links: {
          deleteMany: {
            page_linkId: data.id
          },
          create: data.links.map(link => ({
            label: link.label,
            href: link.href,
            icon: link.icon,
          })),
        },
      },
    });
  }

  async deletePageLink(id) {

    await this.prisma.linkCompany.deleteMany({
      where: {
        page_linkId: id
      }
    })

    return await this.prisma.page_link.delete({
      where: {
        id: id,
      }

    });
  }
}
