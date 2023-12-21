/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ScheduleService } from "../schedule.service";
import { ScheduleCreateInput } from "./ScheduleCreateInput";
import { Schedule } from "./Schedule";
import { ScheduleFindManyArgs } from "./ScheduleFindManyArgs";
import { ScheduleWhereUniqueInput } from "./ScheduleWhereUniqueInput";
import { ScheduleUpdateInput } from "./ScheduleUpdateInput";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { AvailabilityWhereUniqueInput } from "../../availability/base/AvailabilityWhereUniqueInput";
import { EventTypeFindManyArgs } from "../../eventType/base/EventTypeFindManyArgs";
import { EventType } from "../../eventType/base/EventType";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";

export class ScheduleControllerBase {
  constructor(protected readonly service: ScheduleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Schedule })
  async createSchedule(
    @common.Body() data: ScheduleCreateInput
  ): Promise<Schedule> {
    return await this.service.createSchedule({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        id: true,
        name: true,
        timeZone: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Schedule] })
  @ApiNestedQuery(ScheduleFindManyArgs)
  async schedules(@common.Req() request: Request): Promise<Schedule[]> {
    const args = plainToClass(ScheduleFindManyArgs, request.query);
    return this.service.schedules({
      ...args,
      select: {
        id: true,
        name: true,
        timeZone: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async schedule(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    const result = await this.service.schedule({
      where: params,
      select: {
        id: true,
        name: true,
        timeZone: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSchedule(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() data: ScheduleUpdateInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.updateSchedule({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          id: true,
          name: true,
          timeZone: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSchedule(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.deleteSchedule({
        where: params,
        select: {
          id: true,
          name: true,
          timeZone: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/availability")
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async findAvailability(
    @common.Req() request: Request,
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Availability[]> {
    const query = plainToClass(AvailabilityFindManyArgs, request.query);
    const results = await this.service.findAvailability(params.id, {
      ...query,
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/availability")
  async connectAvailability(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        connect: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/availability")
  async updateAvailability(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        set: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/availability")
  async disconnectAvailability(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        disconnect: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/eventType")
  @ApiNestedQuery(EventTypeFindManyArgs)
  async findEventType(
    @common.Req() request: Request,
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<EventType[]> {
    const query = plainToClass(EventTypeFindManyArgs, request.query);
    const results = await this.service.findEventType(params.id, {
      ...query,
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,

        hashedLink: {
          select: {
            id: true,
          },
        },

        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        timeZone: true,
        title: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/eventType")
  async connectEventType(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventType: {
        connect: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/eventType")
  async updateEventType(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventType: {
        set: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/eventType")
  async disconnectEventType(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventType: {
        disconnect: body,
      },
    };
    await this.service.updateSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }
}
