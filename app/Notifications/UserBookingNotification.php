<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserBookingNotification extends Notification
{
    use Queueable;

    private $booking;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($booking)
    {
        //
        $this->booking = $booking;
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
            ->subject('Booking request')
            ->line('Hey there  Theres a new booking request')
            ->line('User name: ' . $this->booking->user->name)
            ->line('User phone number: ' . $this->booking->user->phone)
            ->line('User suggested game details')
            ->line('Date: ' . $this->booking->date_for_humans)
            ->line('Game: ' . $this->booking->game->name)
            ->line('Total Hours: ' . $this->booking->total_hours . ' Hours')
            ->line('Head on to dashboard settings to check approve or ignore this')
            ->action('Click here', url('/dashboard/gaming/bookings'));
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
