<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BookingRequestNotification extends Notification
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
        ->subject('User Booking Request')
        ->line('Hey there admin, Theres a new booking request')
        ->line('Request made by: '. $this->booking->user->username)
        ->line('User email address: '. $this->booking->user->email)
        ->line('User phone number: ' . $this->booking->user->phone)
        ->line('Booking date: ' . $this->booking->booking_date)
        ->line('Game Booked: ' . $this->booking->game->name)
        ->line('Head on to dashboard settings to check approve or ignore this request')
        ->action('Click here', url('/dashboard/bookings/all'));
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
