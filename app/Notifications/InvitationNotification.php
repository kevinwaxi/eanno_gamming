<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class InvitationNotification extends Notification
{
    use Queueable;

    private $invitationData;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($invitationData)
    {
        //
        $this->invitationData = $invitationData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Eanno Gaming Approved Request')
            ->greeting('Request Approved')
            ->line($this->invitationData['name'])
            ->line($this->invitationData['body'])
            ->action($this->invitationData['text'], $this->invitationData['url'])
            ->line($this->invitationData['thanks']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
