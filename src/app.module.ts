import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { IntentsBitField } from 'discord.js';
import { AppService } from './app.service';
import { AppCommands } from './text.command';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NecordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const token = configService.get<string>('DISCORD_TOKEN');
        if (!token) {
          throw new Error('DISCORD_TOKEN is not set in the environment variables');
        }
        return {
          token,
          intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,          
          ],
          development: [configService.get<string>('DISCORD_DEVELOPMENT_GUILD_ID')].filter(Boolean) as string[],
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AppCommands, AppService]
})
export class AppModule {}
